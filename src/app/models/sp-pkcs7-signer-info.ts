//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpPkcs7SignerId } from './sp-pkcs7-signer-id';
import { SpX509AlgorithmId } from './sp-x509-algorithm-id';
import { SpX509Signature } from './sp-x509-signature';

export class SpPkcs7SignerInfo {
  private version: number;
  private signerId: SpPkcs7SignerId;
  private digestAlgo: SpX509AlgorithmId;
  private signAlgo: SpX509AlgorithmId;
  private signature: SpX509Signature;

  public constructor() {
    this.version = 1;

    this.signerId = new SpPkcs7SignerId();

    this.digestAlgo = new SpX509AlgorithmId();
    this.signAlgo = new SpX509AlgorithmId();

    this.signature = new SpX509Signature();
  }

  public getVersion(): number {
    return this.version;
  }

  public setVersion(value: number) {
    this.version = value;
  }

  public getSignerId(): SpPkcs7SignerId {
    return this.signerId;
  }

  public setSignerId(value: SpPkcs7SignerId) {
    this.signerId = value;
  }

  public getDigestAlgo(): SpX509AlgorithmId {
    return this.digestAlgo;
  }

  public setDigestAlgo(value: SpX509AlgorithmId) {
    this.digestAlgo = value;
  }

  public getSignAlgo(): SpX509AlgorithmId {
    return this.signAlgo;
  }

  public setSignAlgo(value: SpX509AlgorithmId) {
    this.signAlgo = value;
  }

  public getSignature(): SpX509Signature {
    return this.signature;
  }

  public setSignature(value: SpX509Signature) {
    this.signature = value;
  }
}
