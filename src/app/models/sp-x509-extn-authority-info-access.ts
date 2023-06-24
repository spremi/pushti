//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpOidInfoAccess } from '@models/sp-oid-info-access';

import { InfoAccess } from 'pkijs';

export interface SpAuthorityInfoAccess {
  oid: string;
  method: string;
  location: string;
}

export class SpX509ExtnAuthorityInfoAccess {
  private aia: SpAuthorityInfoAccess[] = [];

  public constructor() {
  }

  public setValue(value: Uint8Array): void {
    const infoAccess = InfoAccess.fromBER(value);

    infoAccess.accessDescriptions.forEach(desc => {
      const info: SpAuthorityInfoAccess = {
        oid: desc.accessMethod,
        method: SpOidInfoAccess[desc.accessMethod],
        location: desc.accessLocation.value
      };

      this.aia.push(info);
    });
  }

  public getAIA(): SpAuthorityInfoAccess[] {
    return this.aia;
  }
}
