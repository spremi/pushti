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
import { SpCertificatePolicy, SpX509ExtnCertPolicy } from '@models/sp-x509-extn-cert-policy';

@Component({
  selector: 'sp-show-extn-cert-policy',
  templateUrl: './show-extn-cert-policy.component.html',
  styleUrls: ['./show-extn-cert-policy.component.sass']
})
export class ShowExtnCertPolicyComponent {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  policies: SpCertificatePolicy[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        this.parse();
      }
    }
  }

  onCopy(): void {
  }

  private parse(): void {
    if (this.value) {
      const policy = new SpX509ExtnCertPolicy();
      policy.setValue(this.value);

      this.policies = policy.getPolicies();

    } else {
      this.policies = [];
    }
  }
}
