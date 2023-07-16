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

@Component({
  selector: 'sp-show-extn-default',
  templateUrl: './show-extn-default.component.html',
  styleUrls: ['./show-extn-default.component.sass']
})
export class ShowExtnDefaultComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      switch (attr) {
        case 'oid':
          this.oid = changes[attr].currentValue;
          break;

        case 'critical':
          this.critical = changes[attr].currentValue;
          break;

        case 'value':
          this.value = changes[attr].currentValue;
          break;

        default:
          break;
      }
    }
  }

  onCopy(): void {
  }
}
