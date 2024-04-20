//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SpX509Certificate } from '@models/sp-x509-certificate';
import { CacheService } from '@services/cache.service';
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

  private activatedRoute = inject(ActivatedRoute);

  private fileStore = inject(FileStoreService);
  private snackBar = inject(MatSnackBar);
  private certParser = inject(CertificateParserService);
  private layoutSvc = inject(LayoutService);
  private cacheSvc = inject(CacheService);

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

  flash = false;

  columns = 'cols-1';

  private update$!: Subscription;
  private layout$!: Subscription;

  private cacheId = -1;

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    this.flash = true;

    const CLIP_FILE = 'from-clipboard.pem'

    setTimeout(() => {
      this.flash = false;
    }, 100);

    if (event.clipboardData) {
      const text = event.clipboardData.getData('text');

      if (text) {
        let ret = this.fileStore.save(CLIP_FILE, 'text/plain', text as string);

        if (ret) {
          this.certFile = CLIP_FILE;
        } else {
          this.snackBar.open('Pasted \'text\' is not valid PEM');
        }
      } else {
        this.snackBar.open('No \'text\' in clipboard');
      }
    } else {
      this.snackBar.open('Clipboard was empty');
    }
  }

  ngOnInit(): void {
    //
    // Check if we are looking for cached certificate for PEM.
    //
    if (this.activatedRoute.firstChild) {
      this.activatedRoute.firstChild.params.subscribe(params => {
        this.cacheId = params['id'];

        const pem = this.cacheSvc.get(this.cacheId);

        if (pem === '') {
          this.snackBar.open('No PEM at index \'' + this.cacheId + '\'');
        } else {
          const pemFile = "cached-pem-" + String(this.cacheId).padStart(2, '0') + '.pem';

          let ret = this.fileStore.save(pemFile, 'text/plain', pem);

          if (ret) {
            this.certFile = pemFile;
          } else {
            this.snackBar.open('Cached certificate is not valid PEM');
          }
        }
      });
    }

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
