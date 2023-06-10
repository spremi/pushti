//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpOidAlgorithm } from './sp-oid-algorithm';

export class SpX509AlgorithmId {
  private oid: string;
  private name: string;

  public constructor() {
    this.oid = '';
    this.name = '';
  }

  public getOid(): string {
    return this.oid;
  }

  public getName(): string {
    return this.name;
  }

  public setOid(oid: string): void {
    this.oid = oid;
    this.name = SpOidAlgorithm[oid];
  }
}
