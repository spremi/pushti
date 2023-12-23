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
import { MatSnackBar } from '@angular/material/snack-bar';
import { SafeResourceUrl } from '@angular/platform-browser';
import { SpPkcs7Signature } from '@models/sp-pkcs7-signature';
import { FileStoreService } from '@services/file-store.service';
import { PdfParserService } from '@services/pdf-parser.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sp-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.sass']
})
export class PdfComponent implements OnInit, OnDestroy {

  readonly ACCEPT_EXTENSIONS = [
    '.pdf',
  ].join(',');

  private fileStore = inject(FileStoreService);
  private snackBar = inject(MatSnackBar);
  private pdfParser = inject(PdfParserService);

  private pdfUpdate$!: Subscription;

  pdfName = '';
  pdfUrl!: SafeResourceUrl | null;

  pdfSigned = false;

  pdfSignature!: SpPkcs7Signature | null;

  ngOnInit(): void {
    this.pdfUpdate$ = this.pdfParser.updateObserver().subscribe(() => {
      this.pdfName = this.pdfParser.getName();
      this.pdfUrl = this.pdfParser.getPdf();

      this.pdfSigned = this.pdfParser.hasSignature();
      this.pdfSignature = this.pdfParser.getSignature();
    });
  }

  ngOnDestroy(): void {
    if (this.pdfUpdate$) {
      this.pdfUpdate$.unsubscribe();
    }
  }

  /**
   * Handle the file select event.
   */
  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;

    // Attribute 'multiple' is set to false.
    // We can safely use index 0 get file object.
    const file = files[0];

    const fileName = file.name;
    const fileType = file.type;

    console.log('Reading file ' + fileName + ' as ' + fileType);

    const reader = new FileReader();

    reader.onload = () => {
      let ret = this.fileStore.save(fileName, fileType, reader.result as string);

      if (ret) {
        this.pdfName = fileName;
      } else {
        this.snackBar.open('Unable to parse file: ' + fileName);
      }
    };

    reader.onerror = () => {
      this.snackBar.open('Unable to read file: ' + fileName + '\n' + reader.error?.message as string);
    };

    reader.readAsBinaryString(file);
  }

  onClear() {
    this.pdfUrl = null;
    this.pdfName = '';

    this.pdfParser.clear();
    this.fileStore.clear();
  }
}
