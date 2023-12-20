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
import { SpCertPreview } from '@models/sp-cert-preview';
import { SpPkcs7ContentId } from '@models/sp-pkcs7-content-id';
import { SpPkcs7Signature } from '@models/sp-pkcs7-signature';
import { SpPkcs7SignerInfo } from '@models/sp-pkcs7-signer-info';

@Component({
  selector: 'sp-show-pdf-sign',
  templateUrl: './show-pdf-sign.component.html',
  styleUrls: ['./show-pdf-sign.component.sass']
})
export class ShowPdfSignComponent implements OnChanges {
  @Input() value: SpPkcs7Signature | null = null;

  contentType: SpPkcs7ContentId | null = null;
  signerInfo: SpPkcs7SignerInfo[] | null = null;

  certPreview: SpCertPreview[] | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        this.init();
      } else {
        this.value = null;
      }
    }
  }

  private init(): void {
    this.contentType = this.value?.getContentType() ?? null;
    this.signerInfo = this.value?.getSignerInfo() ?? null;
    this.certPreview = this.value?.getCertificates() ?? null;
  }
}
