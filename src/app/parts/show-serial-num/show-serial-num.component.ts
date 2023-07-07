//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SpX509SerialNumber } from '@models/sp-x509-serial-number';

@Component({
  selector: 'sp-show-serial-num',
  templateUrl: './show-serial-num.component.html',
  styleUrls: ['./show-serial-num.component.sass']
})
export class ShowSerialNumComponent implements OnChanges {
  @Input() value!: SpX509SerialNumber;

  serialNumber: Uint8Array = new Uint8Array();

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          this.serialNumber = this.value.get();
        } else {
          this.serialNumber = new Uint8Array();
        }
      }
    }
  }

  onCopy(): void {
    console.log('Copy clicked!');
  }
}
