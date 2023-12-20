//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { SpX509Entity } from './sp-x509-entity';
import { SpX509SerialNumber } from './sp-x509-serial-number';

/**
 * Provides quick view of certificate details required while viewing
 * the signature details of PDF.
 */
export class SpCertPreview {
  /**
   * Raw certificate in BER format
   */
  private raw: string;

  private serialNum: SpX509SerialNumber;

  private subject: SpX509Entity;
  private issuer: SpX509Entity;

  constructor() {
    this.raw = '';

    this.serialNum = new SpX509SerialNumber();
    this.subject = new SpX509Entity();
    this.issuer = new SpX509Entity();
  }

  getRaw(): string {
    return this.raw;
  }

  setRaw(s: string): void {
    this.raw = '-----BEGIN CERTIFICATE-----\n' + s + '\n-----END CERTIFICATE-----\n';
  }

  getSerialNumber(): SpX509SerialNumber {
    return this.serialNum;
  }

  getSubject(): SpX509Entity {
    return this.subject;
  }

  getIssuer(): SpX509Entity {
    return this.issuer;
  }
}
