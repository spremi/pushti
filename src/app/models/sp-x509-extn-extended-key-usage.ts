//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpOidExtendedKeyUsage } from '@models/sp-oid-extended-key-usage';
import { ExtKeyUsage } from 'pkijs';

export class SpX509ExtnExtendedKeyUsage {

  usage: string[] = [];

  public constructor() {
  }

  public setValue(value: Uint8Array): void {
    this.usage = [];

    const keyUsage = ExtKeyUsage.fromBER(value);

    keyUsage.keyPurposes.forEach(purpose => {
      if (purpose in SpOidExtendedKeyUsage) {
        this.usage.push(SpOidExtendedKeyUsage[purpose]);
      } else {
        this.usage.push('See OID: ' + purpose);
      }
    });
  }

  public getUsage(): string[] {
    return this.usage;
  }
}
