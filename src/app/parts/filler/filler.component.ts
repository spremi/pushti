//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sp-filler',
  templateUrl: './filler.component.html',
  styleUrls: ['./filler.component.sass']
})
export class FillerComponent {
  @Input() select!: string;
  @Input() clear = false;

  pem = '';

  onPastePEM(event: ClipboardEvent): void {

    if (event.clipboardData) {
      this.pem = event.clipboardData.getData('text');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'clear') {
        if (changes[attr].currentValue) {
          this.pem = '';
        }
      }
    }
  }
}
