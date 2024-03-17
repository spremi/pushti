//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { OctetString, Sequence, fromBER } from 'asn1js';

// SEQUENCE {
//   INTEGER 1
//   'http://timestamp.url/path/endpoint'
// }

export class SpX509ExtnAdobeTs {
  private url!: Uint8Array;

  public setValue(value: Uint8Array): void {
    const obj = fromBER(value);

    // View result as Sequence
    const seq = obj.result as Sequence;

    // Get object at index 1 the sequence.
    const urlObj = seq.valueBlock.value[1] as OctetString;

    this.url = urlObj.valueBlock.valueHexView;
  }

  public getUrl(): Uint8Array {
    return this.url;
  }
}
