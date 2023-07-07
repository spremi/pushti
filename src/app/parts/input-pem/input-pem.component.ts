//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CertificateParserService } from '@services/certificate-parser.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sp-input-pem',
  templateUrl: './input-pem.component.html',
  styleUrls: ['./input-pem.component.sass']
})
export class InputPemComponent implements OnInit, OnDestroy {
  pem = '';

  private certParser = inject(CertificateParserService);

  private update$!: Subscription;

  ngOnInit(): void {
    this.update$ = this.certParser.updateObserver()
      .subscribe(() => {
        this.pem = this.certParser.getPEM();
      });
  }

  ngOnDestroy(): void {
    if (this.update$) {
      this.update$.unsubscribe();
    }
  }

  onCopy(): void {
    console.log('Copy clicked!');
  }
}
