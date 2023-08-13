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
import { SpAuthorityInfoAccess, SpX509ExtnAuthorityInfoAccess } from '@models/sp-x509-extn-authority-info-access';

interface LocalAuthorityInfoAccess {
  oid: string;
  method: string;
  location: string;
}

@Component({
  selector: 'sp-show-extn-authority-info-access',
  templateUrl: './show-extn-authority-info-access.component.html',
  styleUrls: ['./show-extn-authority-info-access.component.sass']
})
export class ShowExtnAuthorityInfoAccessComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  aia: SpAuthorityInfoAccess[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const authInfoAccess = new SpX509ExtnAuthorityInfoAccess();
          authInfoAccess.setValue(this.value);

          this.aia = authInfoAccess.getAIA();
        } else {
          this.aia = [];
        }
      }
    }
  }

  onCopy(): void {
  }
}
