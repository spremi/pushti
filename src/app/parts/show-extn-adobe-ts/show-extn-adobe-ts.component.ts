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
import { SpX509ExtnAdobeTs } from '@models/sp-x509-extn-adobe-ts';

@Component({
  selector: 'sp-show-extn-adobe-ts',
  templateUrl: './show-extn-adobe-ts.component.html',
  styleUrls: ['./show-extn-adobe-ts.component.sass']
})
export class ShowExtnAdobeTsComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  url: Uint8Array | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const adobeTs = new SpX509ExtnAdobeTs();
          adobeTs.setValue(this.value);

          this.url = adobeTs.getUrl();
        } else {
          this.url = null;
        }
      }
    }
  }

  onCopy(): void {
  }
}
