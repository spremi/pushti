//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

export class SpX509Validity {
  private notBefore: Date;
  private notAfter: Date;

  public constructor() {
    this.notBefore = new Date(0);
    this.notAfter = new Date(0);
  }

  public getNotBefore(): Date {
    return this.notBefore
  }

  public getNotAfter(): Date {
    return this.notAfter
  }

  public setNotBefore(date: Date): void {
    this.notBefore = date;
  }

  public setNotAfter(date: Date): void {
    this.notAfter = date;
  }
}
