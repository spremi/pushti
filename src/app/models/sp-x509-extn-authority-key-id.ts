//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { OctetString, fromBER } from 'asn1js';

// OBJECT IDENTIFIER authorityKeyIdentifier(2 5 29 35)
// OCTET STRING, encapsulates {
//     SEQUENCE {
//                 [0]
//           AA BB CC.. ..ZZ


export class SpX509ExtnAuthorityKeyId {
  private keyId: Uint8Array = new Uint8Array();

  public constructor() {
  }

  public setValue(value: Uint8Array): void {
    const keyObj = fromBER(value);
    // console.log(keyObj);

    const keySeq = fromBER(keyObj.result.valueBlock.toBER())
    // console.log(keySeq);

    const keyStr = keySeq.result as OctetString;
    // console.log(keyStr);

    this.keyId = keyStr.valueBlock.valueHexView;
  }

  public getKeyId(): Uint8Array {
    return this.keyId;
  }
}
