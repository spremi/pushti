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
import { SpOidBaseAlgorithmECDSA, SpOidBaseAlgorithmRSA } from '@models/sp-oid-algorithm';
import { SpX509AlgorithmId } from '@models/sp-x509-algorithm-id';
import { SpX509Certificate } from '@models/sp-x509-certificate';
import { SpX509Extension } from '@models/sp-x509-extension';
import { SpX509Fingerprints } from '@models/sp-x509-fingerprints';
import { SpEcPublicKey, SpRsaPublicKey } from '@models/sp-x509-public-key-info';
import { SpX509SerialNumber } from '@models/sp-x509-serial-number';
import { SpX509Signature } from '@models/sp-x509-signature';
import { SpX509UniqueId } from '@models/sp-x509-unique-id';
import { SpX509Validity } from '@models/sp-x509-validity';
import { SpX509Version } from '@models/sp-x509-version';
import { LogService } from '@services/log.service';

import { Certificate, ECPublicKeyJson, RSAPublicKeyJson } from 'pkijs';
import { Convert } from 'pvtsutils';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateParserService {
  readonly TAG = 'CERT-PARSER';

  readonly CERT_HEAD = '-----BEGIN CERTIFICATE-----';
  readonly CERT_TAIL = '-----END CERTIFICATE-----';

  /**
   * We cannot create an empty/ null instance of X509Certificate object.
   * Emit a counter to indicate change in value.
   */
  private update$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private error$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private cert!: Certificate | null;

  private parsedCert!: SpX509Certificate | null;

  private name = '';

  private pem = '';

  private count = 0;

  private logSvc = inject(LogService);

  constructor() { }

  getCertificate(): SpX509Certificate | null {
    return this.parsedCert;
  }

  getPEM(): string {
    return this.pem;
  }

  getName(): string {
    return this.name;
  }

  errorObserver(): Observable<string> {
    return this.error$.asObservable();
  }

  updateObserver(): Observable<number> {
    return this.update$.asObservable();
  }

  public parsePEM(name: string, pem: string): boolean {
    this.logSvc.debug(this.TAG, 'Parsing PEM');

    let ret = false;

    //
    // Extract contents between CERT_HEAD (included) and CERT_TAIL(included).
    //
    let trimPEM = pem;

    if (trimPEM.includes(this.CERT_HEAD)) {
      trimPEM = trimPEM.substring(pem.indexOf(this.CERT_HEAD) + this.CERT_HEAD.length);
    }

    if (trimPEM.includes(this.CERT_TAIL)) {
      trimPEM = trimPEM.slice(0, trimPEM.indexOf(this.CERT_TAIL));
    }

    trimPEM = trimPEM.replace(/[\r\n]/gm, '')

    try {
      const ber = this.stringToArrayBuffer(atob(trimPEM));

      ret = this.parse(ber);
    } catch (e) {
      if (e instanceof Error) {
        this.error$.next(e.message);
      } else if (typeof e === 'string') {
        this.error$.next(e);
      }
    }

    if (ret) {
      this.name = name;
      this.pem = pem;

      this.update$.next(++this.count);
    }

    return ret;
  }

  public parseBER(name: string, ber: string): boolean {
    this.logSvc.debug(this.TAG, 'Parsing BER');

    let ret = false;

    ret = this.parse(this.stringToArrayBuffer(ber));
    if (ret) {
      this.name = name;
      this.pem = btoa(ber);

      this.update$.next(++this.count);
    }

    return ret;
  }

  public parse(ber: ArrayBuffer): boolean {
    var ret = false;

    // Clear previous errors
    this.error$.next('');

    try {
      this.extractInfo(ber);

      ret = true;
    } catch (e) {
      if (e instanceof Error) {
        this.error$.next(e.message);
      } else if (typeof e === 'string') {
        this.error$.next(e);
      }
    }

    return ret;
  }

  public clear() {
    this.parsedCert = null;
    this.cert = null;
    this.name = '';
    this.pem = '';

    this.update$.next(++this.count);
  }

  private extractInfo(ber: ArrayBuffer): void {
    this.cert = Certificate.fromBER(ber);

    this.parsedCert = new SpX509Certificate();

    //
    // Version
    //
    this.logSvc.debug(this.TAG, 'Not before = ' + this.cert.version);
    const version = new SpX509Version();
    version.set(this.cert.version);

    this.parsedCert.setVersion(version);

    //
    // Serial number
    //
    this.logSvc.debug(this.TAG, 'Serial Num = ' + this.cert.serialNumber.toBigInt().toString(16));
    const serialNumber = new SpX509SerialNumber();
    serialNumber.set(this.cert.serialNumber.valueBlock.valueHexView);

    this.parsedCert.setSerialNumber(serialNumber);

    //
    // Validity
    //
    this.logSvc.debug(this.TAG, 'Not before = ' + this.cert.notBefore);
    this.logSvc.debug(this.TAG, 'Not after = ' + this.cert.notAfter);

    const validity = new SpX509Validity();
    validity.setNotBefore(this.cert.notBefore.value);
    validity.setNotAfter(this.cert.notAfter.value);

    this.parsedCert.setValidity(validity);

    //
    // Issuer
    //
    this.cert.issuer.typesAndValues.forEach(arg => {
      this.logSvc.debug(this.TAG, 'Issuer OID = ' + arg.type);
      this.logSvc.debug(this.TAG, 'Issuer Value = ' + arg.value.valueBlock.value);

      if (this.parsedCert) {
        this.parsedCert.getIssuer().addRDN(arg.type, arg.value.valueBlock.value);
      }
    })

    //
    // Subject
    //
    this.cert.subject.typesAndValues.forEach(arg => {
      this.logSvc.debug(this.TAG, 'Subject OID = ' + arg.type);
      this.logSvc.debug(this.TAG, 'Subject Value = ' + arg.value.valueBlock.value);

      if (this.parsedCert) {
        this.parsedCert.getSubject().addRDN(arg.type, arg.value.valueBlock.value);
      }
    })

    //
    // Subject Public Key Info
    //
    this.logSvc.show(this.TAG, 'AlgorithmId', this.cert.subjectPublicKeyInfo.algorithm.algorithmId);
    this.logSvc.show(this.TAG, 'Subject Public Key', this.cert.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHexView);

    const subjectPublicKeyAlgoId = new SpX509AlgorithmId();
    subjectPublicKeyAlgoId.setOid(this.cert.subjectPublicKeyInfo.algorithm.algorithmId);
    this.parsedCert.getSubjectPublicKeyInfo().setAlgorithmId(subjectPublicKeyAlgoId);

    const pubKeyInfo = this.cert.subjectPublicKeyInfo;

    if (pubKeyInfo.algorithm.algorithmId.indexOf(SpOidBaseAlgorithmRSA) !== -1) {
      if (pubKeyInfo.parsedKey) {
        const rsaPubKey = pubKeyInfo.parsedKey.toJSON() as RSAPublicKeyJson;

        const n = Convert.FromBase64Url(rsaPubKey.n);
        const e = Convert.FromBase64Url(rsaPubKey.e);

        const modulus = new Uint8Array(n);

        // Convert 'e' to big-endian number;
        let exponent = 0;

        new Uint8Array(e).forEach(p => {
          exponent = (exponent << 8) + p;
        });

        const rsaKey: SpRsaPublicKey = {
          size: modulus.length * 8,
          n: modulus,
          e: exponent,
        };

        this.parsedCert.getSubjectPublicKeyInfo().setRsaKey(rsaKey);
      }
    }

    if (pubKeyInfo.algorithm.algorithmId.indexOf(SpOidBaseAlgorithmECDSA) !== -1) {
      // Get first byte in BITSTRING.
      const x0 = pubKeyInfo.subjectPublicKey.valueBlock.valueHexView[0];

      const isCompressed = (x0 === 0x02) || (x0 === 0x03);

      if (pubKeyInfo.parsedKey) {
        const ecPubKey = pubKeyInfo.parsedKey.toJSON() as ECPublicKeyJson;

        const x = Convert.FromBase64Url(ecPubKey.x);
        const y = Convert.FromBase64Url(ecPubKey.y);

        const ecKey: SpEcPublicKey = {
          isCompressed: isCompressed,
          curve: ecPubKey.crv,
          x: new Uint8Array(x),
          y: new Uint8Array(y),
        }

        this.parsedCert.getSubjectPublicKeyInfo().setEcKey(ecKey);
      }
    }

    //
    // Fingerprints
    //
    let certFingerprints = new SpX509Fingerprints();

    this.hash('SHA-1', ber).then(
      data => {
        certFingerprints.setSHA1(data);
      },
      err => {
        console.log('Error while calculating SHA1 fingerprint.');
      });

    this.hash('SHA-256', ber).then(
      data => {
        certFingerprints.setSHA256(data);
      },
      err => {
        console.log('Error while calculating SHA256 fingerprint.');
      });

    this.parsedCert.setCertFingerprints(certFingerprints);

    //
    // Unique ID
    //
    this.logSvc.show(this.TAG, 'Issuer Unique Id', this.cert.issuerUniqueID);
    if (this.cert.issuerUniqueID) {
      const issuerUniqueId = new SpX509UniqueId();
      //TODO
      this.parsedCert.setIssuerUID(issuerUniqueId);
    }

    this.logSvc.show(this.TAG, 'Subject Unique Id', this.cert.subjectUniqueID);
    if (this.cert.subjectUniqueID) {
      const subjectUniqueId = new SpX509UniqueId();
      //TODO
      this.parsedCert.setSubjectUID(subjectUniqueId);
    }

    //
    // Extensions
    //
    if (this.cert.extensions) {
      this.logSvc.debug(this.TAG, 'Certificate has extensions');

      this.cert.extensions.forEach(extension => {
        this.logSvc.show(this.TAG, 'Extension', extension);

        const extObj = new SpX509Extension(extension.extnID,
          extension.critical,
          extension.extnValue.valueBlock.valueHexView);

        if (this.parsedCert) {
          this.parsedCert.addExtension(extObj);
        }
      });
    }

    //
    // Signature
    //
    this.logSvc.show(this.TAG, 'Signature Algorithm', this.cert.signatureAlgorithm);
    const algoId = new SpX509AlgorithmId();
    algoId.setOid(this.cert.signatureAlgorithm.algorithmId);

    this.logSvc.show(this.TAG, 'Signature', this.cert.signature);
    this.logSvc.show(this.TAG, 'Signature Value', this.cert.signatureValue);

    const certSignature = new SpX509Signature();

    certSignature.setAlgorithmId(algoId);
    certSignature.setValue(this.cert.signatureValue.valueBlock.valueHexView);

    this.parsedCert.setCertSignature(certSignature);
  }

  private stringToArrayBuffer(str: string): ArrayBuffer {
    var buf = new ArrayBuffer(str.length);
    var bufView = new Uint8Array(buf);

    for (var i = 0, strLen = str.length; i < strLen; i++)
      bufView[i] = str.charCodeAt(i);

    return buf;
  };

  private hash = async (algo: string, buffer: ArrayBuffer) => {
    const hashBuffer = await crypto.subtle.digest(algo, buffer);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray
      .map((b) => b.toString(16).padStart(2, '0').toUpperCase())
      .join(':');
  };
}
