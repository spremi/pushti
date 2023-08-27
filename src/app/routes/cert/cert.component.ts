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
import { SpX509Certificate } from '@models/sp-x509-certificate';
import { CertificateParserService } from '@services/certificate-parser.service';
import { FileStoreService } from '@services/file-store.service';
import { LayoutService } from '@services/layout.service';
import { Subscription, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'sp-cert',
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.sass']
})
export class CertComponent implements OnInit, OnDestroy {

  private fileStore = inject(FileStoreService);
  private snackBar = inject(MatSnackBar);
  private certParser = inject(CertificateParserService);
  private layoutSvc = inject(LayoutService);

  readonly ACCEPT_EXTENSIONS = [
    '.ber',
    '.cer',
    '.crt',
    '.der',
    '.pem',
    '.txt',
  ].join(',');

  certFile = '';
  certificate!: SpX509Certificate | null;

  columns = 'cols-1';

  private update$!: Subscription;
  private layout$!: Subscription;

  ngOnInit(): void {
    this.update$ = this.certParser.updateObserver()
      .pipe(
        filter(v => v !== null),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.certFile = this.certParser.getName();
        this.certificate = this.certParser.getCertificate();
      });

    this.layout$ = this.layoutSvc.columnObserver()
      .pipe(distinctUntilChanged())
      .subscribe(value => {
        this.columns = 'cols-' + value;
      });
  }

  ngOnDestroy(): void {
    if (this.update$) {
      this.update$.unsubscribe();
    }

    if (this.layout$) {
      this.layout$.unsubscribe();
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

    let mime = file.type;

    reader.onload = () => {
      let ret = this.fileStore.save(fileName, fileType, reader.result as string);

      if (ret) {
        this.certFile = fileName;
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
    this.fileStore.clear();
  }
}
