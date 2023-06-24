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
  name: 'toHex'
})
export class ToHexPipe implements PipeTransform {
  readonly BLOCK = 4;

  /**
   * Build a sequence of 4-byte blocks so that they can be wrapped at
   * known boundaries.
   *
   * Since this generates HTML, output must be used via 'innerHTML' tag.
   */
  transform(buf: ArrayBuffer): string {
    if (buf.byteLength == 0) {
      console.log('Empty Buffer');
      return '';
    }

    const bytes = new Uint8Array(buf);

    let blocks = new Array();

    for (let i = 0; i < buf.byteLength; i += this.BLOCK) {
      let j = i + this.BLOCK;

      if (j > buf.byteLength) {
        j = buf.byteLength;
      }

      let x = bytes.slice(i, j);
      let y = new Array(x.length);

      for (let k = 0; k < x.length; k++) {
        y[k] = bytes[i + k].toString(16).padStart(2, '0').toUpperCase();
      }

      let block = '<span class class="hex">' + y.join(':') + '</span>'

      blocks.push(block);
    }

    return blocks.join('<span class="hex">:</span>');
  }
}
