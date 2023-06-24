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
// OBJECT IDENTIFIER subjectAltName(2 5 29 17)
// OCTET STRING, encapsulates {
//     SEQUENCE {
//       [1] 'abc...z'

// SEQUENCE {
//   OBJECT IDENTIFIER issuerAltName(2 5 29 18)
//   OCTET STRING, encapsulates {
//     SEQUENCE {
//           [1] 'abc...z'


export class SpX509ExtnEntityAltName {

  private names: Uint8Array[] = [];

  public constructor() {
  }

  public setValue(value: Uint8Array): void {
    this.names = [];

    const decode = fromBER(value);

    const seq = decode.result as Sequence;

    seq.valueBlock.value.forEach(v => {
      const t = fromBER(v.toBER());

      const u = t.result as OctetString;

      this.names.push(u.valueBlock.valueHexView);
    });
  }

  public getNames(): Uint8Array[] {
    return this.names;
  }
}
