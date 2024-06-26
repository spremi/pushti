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
import { SpX509ExtnEntityAltName } from '@models/sp-x509-extn-entity-alt-name';

@Component({
  selector: 'sp-show-extn-subject-alt-name',
  templateUrl: './show-extn-subject-alt-name.component.html',
  styleUrls: ['./show-extn-subject-alt-name.component.sass']
})
export class ShowExtnSubjectAltNameComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  names!: Uint8Array[];

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const altName = new SpX509ExtnEntityAltName();
          altName.setValue(this.value);

          this.names = altName.getNames();
        } else {
          this.names = [];
        }
      }
    }
  }
}
