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

export class SpPkcs7SignerId {
  private issuer: SpX509Entity;
  private issuerSN: SpX509SerialNumber;

  public constructor() {
    this.issuer = new SpX509Entity();
    this.issuerSN = new SpX509SerialNumber();
  }

  public getIssuer(): SpX509Entity {
    return this.issuer;
  }

  public setIssuer(value: SpX509Entity) {
    this.issuer = value;
  }

  public getIssuerSN(): SpX509SerialNumber {
    return this.issuerSN;
  }

  public setIssuerSN(value: SpX509SerialNumber) {
    this.issuerSN = value;
  }
}
