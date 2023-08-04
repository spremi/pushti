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
import { SpX509ExtnAuthorityKeyId } from '@models/sp-x509-extn-authority-key-id';

@Component({
  selector: 'sp-show-extn-authority-key-id',
  templateUrl: './show-extn-authority-key-id.component.html',
  styleUrls: ['./show-extn-authority-key-id.component.sass']
})
export class ShowExtnAuthorityKeyIdComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  keyId: Uint8Array = new Uint8Array();

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const authKeyId = new SpX509ExtnAuthorityKeyId();
          authKeyId.setValue(this.value);

          this.keyId = authKeyId.getKeyId();
        } else {
          this.keyId = new Uint8Array();
        }
      }
    }
  }

  onCopy(): void {
  }
}
