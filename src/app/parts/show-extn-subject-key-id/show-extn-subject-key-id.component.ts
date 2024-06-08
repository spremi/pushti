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
import { SpX509ExtnSubjectKeyId } from '@models/sp-x509-extn-subject-key-id';

@Component({
  selector: 'sp-show-extn-subject-key-id',
  templateUrl: './show-extn-subject-key-id.component.html',
  styleUrls: ['./show-extn-subject-key-id.component.sass']
})
export class ShowExtnSubjectKeyIdComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  keyId: Uint8Array = new Uint8Array();

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const subKeyId = new SpX509ExtnSubjectKeyId();
          subKeyId.setValue(this.value);

          this.keyId = subKeyId.getKeyId();
        } else {
          this.keyId = new Uint8Array();
        }
      }
    }
  }
}
