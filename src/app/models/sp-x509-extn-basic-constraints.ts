//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { BasicConstraints } from 'pkijs';

export class SpX509ExtnBasicConstraints {

  private ca = false;

  public setValue(value: Uint8Array): void {
    if (value) {
      const bc = BasicConstraints.fromBER(value);

      this.ca = bc.cA;
    } else {
      this.ca = false;
    }
  }

  public isCA(): boolean {
    return this.ca;
  }
}
