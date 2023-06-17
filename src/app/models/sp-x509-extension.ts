//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

export class SpX509Extension {
  private oid: string;
  private isCritical: boolean;
  private value: Uint8Array;

  public constructor(oid?: string, critical?: boolean, value?: Uint8Array) {
    this.oid = oid ?? '';
    this.isCritical = critical ?? false;
    this.value = value ?? new Uint8Array();
  }

  public getOid(): string {
    return this.oid;
  }

  public getCritical(): boolean {
    return this.isCritical;
  }

  public getValue(): Uint8Array {
    return this.value;
  }

  public setOid(oid: string): void {
    this.oid = oid;
  }
}
