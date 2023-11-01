//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpCertPreview } from './sp-cert-preview';
import { SpPkcs7ContentId } from './sp-pkcs7-content-id';
import { SpPkcs7SignerInfo } from './sp-pkcs7-signer-info';

export class SpPkcs7Signature {
  private contentType: SpPkcs7ContentId;
  private certificates: SpCertPreview[];
  private signerInfo: SpPkcs7SignerInfo[];

  public constructor() {
    this.contentType = new SpPkcs7ContentId();
    this.certificates = [];
    this.signerInfo = [];
  }

  public getContentType(): SpPkcs7ContentId {
    return this.contentType;
  }

  public setContentType(value: SpPkcs7ContentId): void {
    this.contentType = value;
  }

  public getCertificates(): SpCertPreview[] {
    return this.certificates;
  }

  public addCertificate(value: SpCertPreview): void {
    this.certificates.push(value);
  }

  public getSignerInfo(): SpPkcs7SignerInfo[] {
    return this.signerInfo;
  }

  public addSignerInfo(value: SpPkcs7SignerInfo): void {
    this.signerInfo.push(value);
  }
}
