//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpOidRdn } from './sp-oid-rdn';

export interface SpX509RDN {
  oid: string;
  key: string,
  value: string
};

export class SpX509Entity {
  private rdn: SpX509RDN[];

  public constructor() {
    this.rdn = [] as SpX509RDN[];
  }

  public getRDN(): SpX509RDN[] {
    return this.rdn;
  }

  public addRDN(argOid: string, argValue: string) {
    const item: SpX509RDN = {
      oid: argOid,
      key: SpOidRdn[argOid],
      value: argValue
    };

    this.rdn.push(item);
  }
}
