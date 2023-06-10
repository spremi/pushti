//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

export class SpX509Fingerprints {
  private md5: string;
  private sha1: string;
  private sha256: string;

  public constructor() {
    this.md5 = '';
    this.sha1 = '';
    this.sha256 = '';
  }

  public getMD5(): string {
    return this.md5;
  }

  public getSHA1(): string {
    return this.sha1;
  }

  public getSHA256(): string {
    return this.sha256;
  }

  public setMD5(arg: string): void {
    this.md5 = arg;
  }

  public setSHA1(arg: string): void {
    this.sha1 = arg;
  }

  public setSHA256(arg: string): void {
    this.sha256 = arg;
  }
}
