//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { BitString, fromBER } from 'asn1js';

// KeyUsage ::= BIT STRING {
//    digitalSignature  (0),
//    nonRepudiation    (1), --recent editions of X.509 have
//                       --renamed this bit to contentCommitment
//    keyEncipherment   (2),
//    dataEncipherment  (3),
//    keyAgreement      (4),
//    keyCertSign       (5),
//    cRLSign           (6),
//    encipherOnly      (7),
//    decipherOnly      (8) }


export class SpX509ExtnKeyUsage {

  private digitalSignature = false;
  private contentCommitment = false;
  private keyEncipherment = false;
  private dataEncipherment = false;
  private keyAgreement = false;
  private keyCertSign = false;
  private crlSign = false;
  private encipherOnly = false;
  private decipherOnly = false;

  public constructor() {
  }

  public setValue(value: Uint8Array): void {
    //
    // Reset existing values
    //
    this.digitalSignature = false;
    this.contentCommitment = false;
    this.keyEncipherment = false;
    this.dataEncipherment = false;
    this.keyAgreement = false;
    this.keyCertSign = false;
    this.crlSign = false;
    this.encipherOnly = false;
    this.decipherOnly = false;

    const usage = fromBER(value);
    // console.log(usage.result.valueBeforeDecodeView);

    const usage2 = usage.result as BitString;
    // console.log(usage2.valueBlock.valueHexView);

    const data = usage2.valueBlock.valueHexView;

    if (data && data.length > 0) {
      const usage = data[0];

      this.digitalSignature = (usage & 0x80) > 0;
      this.contentCommitment = (usage & 0x40) > 0;
      this.keyEncipherment = (usage & 0x20) > 0;
      this.dataEncipherment = (usage & 0x10) > 0;
      this.keyAgreement = (usage & 0x08) > 0;
      this.keyCertSign = (usage & 0x04) > 0;
      this.crlSign = (usage & 0x02) > 0;
      this.encipherOnly = (usage & 0x01) > 0;
      this.decipherOnly = (usage & 0x8000) > 0;
    }
  }

  public isDigitalSignature(): boolean {
    return this.digitalSignature;
  }

  public isContentCommitment(): boolean {
    return this.contentCommitment;
  }

  public isKeyEncipherment(): boolean {
    return this.keyEncipherment;
  }

  public isDataEncipherment(): boolean {
    return this.dataEncipherment;
  }

  public isKeyAgreement(): boolean {
    return this.keyAgreement;
  }

  public isKeyCertSign(): boolean {
    return this.keyCertSign;
  }

  public isCrlSign(): boolean {
    return this.crlSign;
  }

  public isEncipherOnly(): boolean {
    return this.encipherOnly;
  }

  public isDecipherOnly(): boolean {
    return this.decipherOnly;
  }
}
