//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

export class SpX509SerialNumber {
  private value: Uint8Array;

  public constructor() {
    this.value = new Uint8Array();
  }

  public get(): Uint8Array {
    return this.value;
  }

  public set(value: Uint8Array): void {
    this.value = value;
  }

  /**
   * Set value from hex string.
   */
  public setHex(arg: string): boolean {
    if ((arg.length % 2) != 0) {
      return false;
    }

    const arr = new Uint8Array(new ArrayBuffer(arg.length / 2));

    let i = 0;
    arg.match(/[\da-fA-F]{2}/gi)?.map(hex => {
      arr[i++] = parseInt(hex, 16);
    });

    this.value = arr;

    return true;
  }
}
