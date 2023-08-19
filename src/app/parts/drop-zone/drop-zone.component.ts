//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, inject } from '@angular/core';
import { FileDropCode, FileDropStatus, FileDropType, initFileDropStatus } from '@models/file-drop-status';
import { FileMimesCert, FileMimesPdf } from '@models/file-mimes';
import { DropOverlayService } from '@services/drop-overlay.service';
import { FileStoreService } from '@services/file-store.service';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'sp-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.sass']
})
export class DropZoneComponent implements OnInit, AfterViewInit {
  @Input({ required: false }) mode!: string;
  @Output() status = new EventEmitter<FileDropStatus>();

  readonly MODE_CERT = 'cert';
  readonly MODE_PDF = 'pdf';

  readonly PROMPT_DEFAULT = 'DROP FILES HERE';
  readonly PROMPT_CERT = 'DROP CERTIFICATE FILES HERE';
  readonly PROMPT_PDF = 'DROP PDF FILES HERE';

  private fileStore = inject(FileStoreService);
  private dropOverlay = inject(DropOverlayService);

  prompt = this.PROMPT_DEFAULT;

  count = 5;

  constructor(
    private renderer: Renderer2,
    private elem: ElementRef) {
  }

  ngOnInit(): void {
    switch (this.mode) {
      case this.MODE_CERT:
        this.prompt = this.PROMPT_CERT;
        break;

      case this, this.MODE_PDF:
        this.prompt = this.PROMPT_PDF;
        break;

      default:
        this.prompt = this.PROMPT_DEFAULT;
        break;
    }
  }

  ngAfterViewInit(): void {
    const self = this.elem.nativeElement;
    this.renderer.setStyle(self, 'position', 'absolute');

    this.renderer.setStyle(self, 'top', this.dropOverlay.getTop());
    this.renderer.setStyle(self, 'left', this.dropOverlay.getLeft());

    this.renderer.setStyle(self, 'width', this.dropOverlay.getWidth());
    this.renderer.setStyle(self, 'height', this.dropOverlay.getHeight());

    //
    // Start timer to close automatically
    //
    interval(1000).pipe(
      takeWhile(() => this.count > 0)
    ).subscribe(() => {
      this.count--;

      if (this.count == 0) {
        const errTimeout = initFileDropStatus(
          FileDropCode.ErrTimeout,
          FileDropType.FileUnknown,
          'No files dropped!');

        this.status.emit(errTimeout);
      }
    });
  }

  /**
   * Handle the file(s) drop event.
   */
  onFilesDropped(files: FileList): void {
    if (files.length > 1) {
      const errMulti = initFileDropStatus(
        FileDropCode.ErrMultipleFiles,
        FileDropType.FileUnknown,
        'Cannot read ' + files.length + ' files.');

      this.status.emit(errMulti);

      return;
    }

    const file = files[0];

    const fileType = file.type;

    if (!FileMimesCert.includes(fileType) && !FileMimesPdf.includes(fileType)) {
      console.log('Unsupported MIME: [' + fileType + ']');

      let msgNoSupport = 'Unsupported file type';

      if (fileType && fileType !== '') {
        msgNoSupport += ':' + fileType;
      } else {
        msgNoSupport += '.';
      }

      const errMime = initFileDropStatus(
        FileDropCode.ErrMultipleFiles,
        this.fileType(fileType),
        msgNoSupport);

      this.status.emit(errMime);

      return;
    }

    this.readFile(file);
  }

  private readFile(file: File): void {
    const fileName = file.name;
    const fileType = file.type;

    console.log('Reading file ' + fileName + ' as ' + fileType);

    const reader = new FileReader();

    let mime = file.type;

    reader.onload = () => {
      let ret = this.fileStore.save(fileName, fileType, reader.result as string);

      if (ret) {
        const success = initFileDropStatus(
          FileDropCode.Success,
          this.fileType(fileType),
          'Read ' + file.size + ' bytes.');

        this.status.emit(success);
      } else {
        const errParse = initFileDropStatus(
          FileDropCode.ErrParsing,
          this.fileType(fileType),
          'Unable to parse the file.');

        this.status.emit(errParse);
      }
    };

    reader.onerror = () => {
      const errRead = initFileDropStatus(
        FileDropCode.ErrReading,
        this.fileType(fileType),
        reader.error?.message as string);

      this.status.emit(errRead);
    };

    reader.readAsBinaryString(file);
  }

  private fileType(fType: string): FileDropType {
    if (FileMimesCert.includes(fType)) {
      return FileDropType.FileCertificate;
    }

    if (FileMimesPdf.includes(fType)) {
      return FileDropType.FilePDF;
    }

    return FileDropType.FileUnknown;
  }
}
