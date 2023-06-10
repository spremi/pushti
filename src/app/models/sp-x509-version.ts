//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

export class SpX509Version {
  private version: number;

  public constructor() {
    this.version = 0;
  }

  public get(): number {
    return this.version;
  }

  public set(version: number): void {
    this.version = version;
  }
}
