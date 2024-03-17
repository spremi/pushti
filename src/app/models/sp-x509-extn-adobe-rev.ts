//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Integer, Sequence, fromBER } from 'asn1js';

// SEQUENCE {
//   INTEGER n
// }

export class SpX509ExtnAdobeRev {
  private rev = 0;

  public setValue(value: Uint8Array): void {
    const obj = fromBER(value);

    // View result as Sequence
    const seq = obj.result as Sequence;

    const revObj = seq.valueBlock.value[0] as Integer;

    this.rev = revObj.valueBlock.valueDec;
  }

  public getRevision(): number {
    return this.rev;
  }
}
