//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Injectable, inject } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private settingsSvc = inject(SettingsService);

  constructor() { }

  /**
   * Write debug log string to console, if enabled.
   */
  debug(tag: string, str: string): void {
    if (this.settingsSvc.getDebug()) {
      console.log(tag + ': ' + str);
    }
  }

  /**
   * Pretty-print object to console.
   */
  show(tag: string, name: string, obj: Object | undefined): void {
    if (this.settingsSvc.getDebug()) {
      if (obj === undefined) {
        console.log(tag + ': ' + name + ': undefined');
      } else {
        console.log(tag + ': ' + name + ':\n' + JSON.stringify(obj, null, 2));
      }
    }
  }
}
