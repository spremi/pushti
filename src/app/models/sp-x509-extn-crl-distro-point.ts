//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { CRLDistributionPoints } from 'pkijs';

/**
 * Local definition for object received after parsing CRL Distribution Points.
 */
interface LocalCrlObject {
  type: number;
  value: string;
}

export class SpX509ExtnCrlDistroPoint {

  private urls: string[] = [];

  public constructor() {
  }

  public setValue(value: Uint8Array): void {
    this.urls = [];

    const cdp = CRLDistributionPoints.fromBER(value);

    cdp.distributionPoints.forEach(p => {
      if (p.distributionPoint) {
        const crlObjects = p.distributionPoint as Array<LocalCrlObject>;

        crlObjects.forEach(obj => {
          this.urls.push(obj.value);
        });
      }
    });
  }

  public getUrls(): string[] {
    return this.urls;
  }
}
