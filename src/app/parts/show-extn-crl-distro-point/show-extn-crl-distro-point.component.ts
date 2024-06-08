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
import { SpX509ExtnCrlDistroPoint } from '@models/sp-x509-extn-crl-distro-point';

@Component({
  selector: 'sp-show-extn-crl-distro-point',
  templateUrl: './show-extn-crl-distro-point.component.html',
  styleUrls: ['./show-extn-crl-distro-point.component.sass']
})
export class ShowExtnCrlDistroPointComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  urls: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const cdp = new SpX509ExtnCrlDistroPoint();
          cdp.setValue(this.value);

          this.urls = cdp.getUrls();
        } else {
          this.urls = [];
        }
      }
    }
  }
}
