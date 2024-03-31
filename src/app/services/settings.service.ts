//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private debug = false;
  private allKeyUsages = false;

  constructor() { }

  /**
   * Read all settings from local storage.
   */
  init(): void {
    this.debug = this.getBoolean('debug', false);
    this.allKeyUsages = this.getBoolean('allKeyUsages', true);
  }

  /**
   * Save all settings in local storage.
   */
  save(): void {
    this.setBoolean('debug', this.debug);
    this.setBoolean('allKeyUsages', this.allKeyUsages);
  }

  getDebug(): boolean {
    return this.debug;
  }

  setDebug(flag: boolean): void {
    this.debug = flag;
  }

  getAllKeyUsages(): boolean {
    return this.allKeyUsages;
  }

  setAllKeyUsages(flag: boolean): void {
    this.allKeyUsages = flag;
  }

  /**
   * Read boolean value from local storage.
   */
  private getBoolean(key: string, alt: boolean): boolean {
    const flag = localStorage.getItem(key);

    if (flag == null) {
      return alt;
    }

    return flag == 'true';
  }

  /**
   * Save boolean value to local storage.
   */
  private setBoolean(key: string, value: boolean): void {
    const flag = (value ? 'true' : 'false');

    localStorage.setItem(key, flag);
  }
}
