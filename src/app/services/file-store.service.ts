//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Injectable, inject } from '@angular/core';
import { CertificateParserService } from './certificate-parser.service';
import { PdfParserService } from './pdf-parser.service';
import { FileMimesCert } from '@models/file-mimes';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileStoreService {

  private fileName = '';
  private fileContents!: string;

  private certParser = inject(CertificateParserService);
  private pdfParser = inject(PdfParserService);

  readonly CERT_TEXT_EXTENSIONS = [
    'cer',
    'crt',
    'pem',
    'txt',
  ];

  constructor() { }

  /**
   * Saves file contents only if parsing is successful.
   */
  public save(fName: string, fType: string, fContents: string): boolean {
    let ret = false;

    const fExtension = fName.substring(fName.lastIndexOf('.') + 1);

    if (FileMimesCert.includes(fType)) {
      let isPEM = true;

      if (this.CERT_TEXT_EXTENSIONS.includes(fExtension)) {
        ret = this.certParser.parsePEM(fName, fContents);
      } else {
        isPEM = false;

        ret = this.certParser.parseBER(fName, fContents);
      }

      if (ret) {
        this.fileName = fName;

        if (isPEM) {
          this.fileContents = fContents;
        } else {
          this.fileContents = btoa(fContents);
        }
      }
    } else {
      // TODO: Handle PDF.
    }

    return ret;
  }

  public getFilename(): string {
    return this.fileName;
  }

  public getContents(): string {
    return this.fileContents;
  }

  /**
   * Clear contents
   */
  public clear(): void {
    this.certParser.clear();

    this.fileName = '';
  }
}
