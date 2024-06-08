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
import { SpX509Version } from '@models/sp-x509-version';

@Component({
  selector: 'sp-show-version',
  templateUrl: './show-version.component.html',
  styleUrls: ['./show-version.component.sass']
})
export class ShowVersionComponent implements OnChanges {
  @Input() value!: SpX509Version;

  version = 1;

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          this.version = this.value.get();
        } else {
          this.version = 1;
        }
      }
    }
  }
}
