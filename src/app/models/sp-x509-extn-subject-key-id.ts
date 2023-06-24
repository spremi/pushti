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

// OBJECT IDENTIFIER subjectKeyIdentifier (2 5 29 14)
// OCTET STRING, encapsulates {
//     OCTET STRING
//        AA BB CC.. ..ZZ

export class SpX509ExtnSubjectKeyId {
  private keyId: Uint8Array = new Uint8Array();

  public constructor() {
  }

  public setValue(value: Uint8Array): void {
    const keyObj = fromBER(value);
    // console.log(keyObj);

    const keyStr = keyObj.result as OctetString;
    // console.log(keyStr);

    this.keyId = keyStr.valueBlock.valueHexView;
  }

  public getKeyId(): Uint8Array {
    return this.keyId;
  }
}
