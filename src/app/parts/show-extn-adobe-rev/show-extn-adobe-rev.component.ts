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
import { SpX509ExtnAdobeRev } from '@models/sp-x509-extn-adobe-rev';

@Component({
  selector: 'sp-show-extn-adobe-rev',
  templateUrl: './show-extn-adobe-rev.component.html',
  styleUrls: ['./show-extn-adobe-rev.component.sass']
})
export class ShowExtnAdobeRevComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  rev = 0;

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const adobeRev = new SpX509ExtnAdobeRev();
          adobeRev.setValue(this.value);

          this.rev = adobeRev.getRevision();
        } else {
          this.rev = 0;   // TODO: Check if this is a good default
        }
      }
    }
  }
}
