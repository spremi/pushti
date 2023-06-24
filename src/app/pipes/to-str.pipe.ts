//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toStr'
})
export class ToStrPipe implements PipeTransform {

  transform(buf: Uint8Array): string {
    let ret = Array.from(buf)
      .map(item => String.fromCharCode(item))
      .join('');

    return ret;
  }
}
