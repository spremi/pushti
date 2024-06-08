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
import { SpX509Validity } from '@models/sp-x509-validity';

@Component({
  selector: 'sp-show-validity',
  templateUrl: './show-validity.component.html',
  styleUrls: ['./show-validity.component.sass']
})
export class ShowValidityComponent implements OnChanges {
  @Input() value!: SpX509Validity;

  notBefore = new Date(0);
  notAfter = new Date(0);

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          this.notBefore = this.value.getNotBefore();
          this.notAfter = this.value.getNotBefore();
        } else {
          this.notBefore = new Date(0);
          this.notAfter = new Date(0);
        }
      }
    }
  }
}
