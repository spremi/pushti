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
import { SpPkcs7SignerId } from './sp-pkcs7-signer-id';
import { SpX509AlgorithmId } from './sp-x509-algorithm-id';

export class SpPkcs9TimestampInfo {
  private timestamp: string;
  private signerId: SpPkcs7SignerId;
  private digestAlgo: SpX509AlgorithmId;
  private signAlgo: SpX509AlgorithmId;
  private certificates: SpCertPreview[] = [];

  public constructor() {
    this.timestamp = '';
    this.signerId = new SpPkcs7SignerId();
    this.digestAlgo = new SpX509AlgorithmId();
    this.signAlgo = new SpX509AlgorithmId();
    this.certificates = [];
  }

  public getTimestamp(): string {
    return this.timestamp;
  }

  public setTimestamp(ts: string): void {
    this.timestamp = ts;
  }

  public getSignerId(): SpPkcs7SignerId {
    return this.signerId;
  }

  public setSignerId(signerId: SpPkcs7SignerId): void {
    this.signerId = signerId;
  }

  public getDigestAlgo(): SpX509AlgorithmId {
    return this.digestAlgo;
  }

  public setDigestAlgo(algoId: SpX509AlgorithmId): void {
    this.digestAlgo = algoId;
  }

  public getSignAlgo(): SpX509AlgorithmId {
    return this.signAlgo;
  }

  public setSignAlgo(algoId: SpX509AlgorithmId): void {
    this.signAlgo = algoId;
  }

  public getCertificates(): SpCertPreview[] {
    return this.certificates;
  }

  public addCertificate(value: SpCertPreview): void {
    this.certificates.push(value);
  }
}
