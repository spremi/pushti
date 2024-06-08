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
import { SpX509Entity } from '@models/sp-x509-entity';

interface KeyValue {
  [key: string]: string;
}

@Component({
  selector: 'sp-show-entity',
  templateUrl: './show-entity.component.html',
  styleUrls: ['./show-entity.component.sass']
})
export class ShowEntityComponent implements OnChanges {
  @Input() title!: string;
  @Input() value!: SpX509Entity;

  rdn: KeyValue = {};

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        this.rdn = {};

        if (this.value) {
          this.value.getRDN().forEach(dn => {
            this.rdn[dn.key] = dn.value;
          });
        }
      }
    }
  }
}
