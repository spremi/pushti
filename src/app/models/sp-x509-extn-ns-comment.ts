//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { IA5String, fromBER } from 'asn1js';

export class SpX509ExtnNsComment {
  private comment = '';

  public setValue(value: Uint8Array): void {
    const obj1 = fromBER(value);

    const obj2 = obj1.result as IA5String;

    this.comment = obj2.getValue();
  }

  public getComment(): string {
    return this.comment;
  }
}
