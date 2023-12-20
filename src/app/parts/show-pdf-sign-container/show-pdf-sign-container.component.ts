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
import { SpPkcs7ContentId } from '@models/sp-pkcs7-content-id';

@Component({
  selector: 'sp-show-pdf-sign-container',
  templateUrl: './show-pdf-sign-container.component.html',
  styleUrls: ['./show-pdf-sign-container.component.sass']
})
export class ShowPdfSignContainerComponent {
  @Input() value: SpPkcs7ContentId | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          this.value = this.value;
        } else {
          this.value = null;
        }
      }
    }
  }
}
