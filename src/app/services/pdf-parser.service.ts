//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Injectable, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

import { Certificate, ContentInfo, IssuerAndSerialNumber, SignedData } from 'pkijs';

import { SpPkcs7Signature } from '@models/sp-pkcs7-signature';
import { SpX509AlgorithmId } from '@models/sp-x509-algorithm-id';
import { SpPkcs7ContentId } from '@models/sp-pkcs7-content-id';
import { SpPkcs7SignerInfo } from '@models/sp-pkcs7-signer-info';
import { SpCertPreview } from '@models/sp-cert-preview';
import { LogService } from '@services/log.service';

@Injectable({
  providedIn: 'root'
})
export class PdfParserService {
  readonly TAG = 'PDF-PARSER';

  readonly PAT_START = new RegExp("%PDF-1.[0-7]");
  readonly PAT_END = new RegExp("%EOF\\r?\\n?$");

  readonly PAT_BYTE_RANGE = new RegExp('/ByteRange\\s*\\[\\s*(.*?)\\s*\\]');

  private sanitizer = inject(DomSanitizer);

  private logSvc = inject(LogService);

  /**
   * We cannot create an empty/ null instance of Blob.
   * Emit a counter to indicate change in value.
   */
  private update$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private error$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private name = '';
  private objUrl!: string;
  private safeUrl: SafeResourceUrl | null = null;

  private count = 0;

  private isSigned = false;

  private signature!: SpPkcs7Signature | null;

  constructor() { }

  errorObserver(): Observable<string> {
    return this.error$.asObservable();
  }

  updateObserver(): Observable<number> {
    return this.update$.asObservable();
  }

  getName(): string {
    return this.name;
  }

  getPdf(): SafeUrl | null {
    return this.safeUrl;
  }

  getSignature(): SpPkcs7Signature | null {
    return this.signature;
  }

  public parse(name: string, contents: string): boolean {
    let ret = false;

    this.isSigned = false;

    this.signature = null;

    const fileStart = contents.slice(0, 9);
    const fileEnd = contents.slice(-6);

    if (this.PAT_START.test(fileStart) && (this.PAT_END.test(fileEnd))) {
      try {
        const buf = Uint8Array.from(contents, c => c.charCodeAt(0));
        const blob: Blob = new Blob([buf], { type: 'application/pdf' });

        this.objUrl = URL.createObjectURL(blob);
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.objUrl);

        if (this.safeUrl) {
          this.name = name;

          //
          // Extract signature
          //
          const reByteRange = new RegExp(this.PAT_BYTE_RANGE);
          const byteRange = contents.match(reByteRange);

          if (byteRange !== null) {
            this.logSvc.debug(this.TAG, 'Byte range = ' + byteRange[1]);

            const range = byteRange[1].split(' ');
            const signStart = parseInt(range[1]) + 1;
            const signEnd = parseInt(range[2]) - 1;

            const sign = contents.substring(signStart, signEnd);
            // console.log('Signature = ' + sign);

            this.internalParse(sign);

            this.isSigned = true;

            ret = true;
          }

          this.update$.next(++this.count);
        }
      } catch (e) {
        if (e instanceof Error) {
          this.error$.next(e.message);
        } else if (typeof e === 'string') {
          this.error$.next(e);
        }
      }
    }

    return ret;
  }

  public clear() {
    this.objUrl = '';
    this.safeUrl = null;
    this.name = '';

    this.update$.next(++this.count);
  }

  public hasSignature(): boolean {
    return this.isSigned;
  }

  private internalParse(hex: string): void {
    const signBer = this.hex2ber(hex);

    const contentInfo = ContentInfo.fromBER(signBer);
    const signData = new SignedData({ schema: contentInfo.content });

    this.signature = new SpPkcs7Signature();

    //
    // Get content type
    //
    const contentType = new SpPkcs7ContentId();
    contentType.setOid(signData.encapContentInfo.eContentType);

    this.signature.setContentType(contentType);

    //
    // Extract certificates
    //
    const certs = signData.certificates;
    certs?.forEach(cert => {
      const previewCert = new SpCertPreview();

      if (cert instanceof Certificate) {
        //
        // Serial number
        //
        const pcSerialNum = previewCert.getSerialNumber();
        pcSerialNum.set(cert.serialNumber.valueBlock.valueHexView);

        //
        // Subject
        //
        const pcSubject = previewCert.getSubject();

        cert.subject.typesAndValues.forEach(arg => {
          pcSubject.addRDN(arg.type, arg.value.valueBlock.value);
        });

        //
        // Issuer
        //
        const pcIssuer = previewCert.getIssuer();

        cert.issuer.typesAndValues.forEach(arg => {
          pcIssuer.addRDN(arg.type, arg.value.valueBlock.value);
        });

        //
        // Raw certificate
        //
        previewCert.setRaw(cert.toString("base64"));
      }

      this.signature?.addCertificate(previewCert);
    });

    //
    // Signer information
    //
    const signerInfos = signData.signerInfos;
    signerInfos?.forEach(info => {
      const signerInfo = new SpPkcs7SignerInfo();

      const signerId = signerInfo.getSignerId();

      if (info.sid instanceof IssuerAndSerialNumber) {
        const issuer = signerId.getIssuer();

        info.sid.issuer.typesAndValues.forEach(arg => {
          issuer.addRDN(arg.type, arg.value.valueBlock.value);
        })

        signerId.getIssuerSN().set(info.sid.serialNumber.valueBlock.valueHexView);
      }

      //
      // Digest Algorithm
      //
      const digestAlgo = signerInfo.getDigestAlgo();
      digestAlgo.setOid(info.digestAlgorithm.algorithmId);

      //
      // Signature
      //
      const signAlgoId = new SpX509AlgorithmId();
      signAlgoId.setOid(info.signatureAlgorithm.algorithmId);

      const signature = signerInfo.getSignature();
      signature.setAlgorithmId(signAlgoId);
      signature.setValue(new Uint8Array(info.signature.getValue()));

      this.signature?.addSignerInfo(signerInfo);
    });

    this.logSvc.show(this.TAG, 'signature', this.signature);
  }

  /**
   * Convert certificate in HEX string to DER.
   */
  private hex2ber(str: string): ArrayBuffer {
    var buf = new ArrayBuffer(str.length / 2);
    var bufView = new Uint8Array(buf);

    for (var i = 0, j = 0, strLen = str.length; i < strLen; i += 2, j++) {
      const x = str[i] + str[i + 1];
      bufView[j] = parseInt(x, 16);
    }

    return buf;
  };
}
