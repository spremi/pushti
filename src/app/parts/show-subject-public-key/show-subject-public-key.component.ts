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
import { SpEcPublicKey, SpRsaPublicKey, SpX509PublicKeyInfo } from '@models/sp-x509-public-key-info';

@Component({
  selector: 'sp-show-subject-public-key',
  templateUrl: './show-subject-public-key.component.html',
  styleUrls: ['./show-subject-public-key.component.sass']
})
export class ShowSubjectPublicKeyComponent implements OnChanges {
  @Input() value!: SpX509PublicKeyInfo;

  algorithm!: string;

  ecKey!: SpEcPublicKey | null;
  rsaKey!: SpRsaPublicKey | null;

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        this.parse();
      }
    }
  }

  onCopy(): void {
    console.log('Copy clicked!');
  }

  private parse(): void {
    if (this.value) {
      console.log(this.value);

      this.algorithm = this.value.getAlgorithmId().getName();

      if (this.value.isRSA()) {
        this.rsaKey = this.value.getRsaKey();
        this.ecKey = null;
      }

      if (this.value.isEC()) {
        this.ecKey = this.value.getEcKey();
        this.rsaKey = null;
      }
    }
  }
}
