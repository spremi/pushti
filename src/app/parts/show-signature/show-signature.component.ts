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
import { SpX509Signature } from '@models/sp-x509-signature';

@Component({
  selector: 'sp-show-signature',
  templateUrl: './show-signature.component.html',
  styleUrls: ['./show-signature.component.sass']
})
export class ShowSignatureComponent {
  @Input() value!: SpX509Signature;

  signAlgo = '';
  signValue = new Uint8Array();

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          this.signAlgo = this.value.getAlgorithmId().getName();
          this.signValue = this.value.getValue();
        } else {
          this.signAlgo = '';
          this.signValue = new Uint8Array();
        }
      }
    }
  }

  onCopy(): void {
    console.log('Copy clicked!');
  }

}
