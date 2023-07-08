//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileStoreService } from '@services/file-store.service';

@Component({
  selector: 'sp-cert',
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.sass']
})
export class CertComponent {

  private fileStore = inject(FileStoreService);
  private snackBar = inject(MatSnackBar);

  readonly ACCEPT_EXTENSIONS = [
    '.ber',
    '.cer',
    '.crt',
    '.der',
    '.pem',
    '.txt',
  ].join(',');

  certFile = '';

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
}
