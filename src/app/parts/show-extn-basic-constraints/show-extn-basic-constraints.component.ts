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
import { SpX509ExtnBasicConstraints } from '@models/sp-x509-extn-basic-constraints';

@Component({
  selector: 'sp-show-extn-basic-constraints',
  templateUrl: './show-extn-basic-constraints.component.html',
  styleUrls: ['./show-extn-basic-constraints.component.sass']
})
export class ShowExtnBasicConstraintsComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  isCA = false;

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const basicConstraints = new SpX509ExtnBasicConstraints();
          basicConstraints.setValue(this.value);

          this.isCA = basicConstraints.isCA();
        } else {
          this.isCA = false;
        }
      }
    }
  }
}
