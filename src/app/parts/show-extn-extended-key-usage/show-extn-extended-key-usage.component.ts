//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, Input, SimpleChanges } from '@angular/core';
import { SpX509ExtnExtendedKeyUsage } from '@models/sp-x509-extn-extended-key-usage';

@Component({
  selector: 'sp-show-extn-extended-key-usage',
  templateUrl: './show-extn-extended-key-usage.component.html',
  styleUrls: ['./show-extn-extended-key-usage.component.sass']
})
export class ShowExtnExtendedKeyUsageComponent {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  usage: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const keyUsage = new SpX509ExtnExtendedKeyUsage();
          keyUsage.setValue(this.value);

          this.usage = keyUsage.getUsage();
        } else {
          this.usage = [];
        }
      }
    }
  }
}
