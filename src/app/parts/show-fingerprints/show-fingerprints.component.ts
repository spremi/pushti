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
import { SpX509Fingerprints } from '@models/sp-x509-fingerprints';

@Component({
  selector: 'sp-show-fingerprints',
  templateUrl: './show-fingerprints.component.html',
  styleUrls: ['./show-fingerprints.component.sass']
})
export class ShowFingerprintsComponent implements OnChanges {
  @Input() value!: SpX509Fingerprints;

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;
      }
    }
  }
}
