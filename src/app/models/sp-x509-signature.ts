//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpX509AlgorithmId } from './sp-x509-algorithm-id';

export class SpX509Signature {
  private algoId: SpX509AlgorithmId;
  private value: Uint8Array;

  public constructor() {
    this.algoId = new SpX509AlgorithmId();
    this.value = new Uint8Array();
  }

  public getAlgorithmId(): SpX509AlgorithmId {
    return this.algoId;
  }

  public getValue(): Uint8Array {
    return this.value;
  }

  public setAlgorithmId(arg: SpX509AlgorithmId): void {
    this.algoId = arg;
  }

  public setValue(sign: Uint8Array): void {
    this.value = sign;
  }
}
