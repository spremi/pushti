//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[spFileDrop]'
})
export class FileDropDirective {
  @Output() onFilesDrop = new EventEmitter<any>();

  /**
   * Host element is currently 'active' in drag/ drop event.
   */
  @HostBinding('class.dropping') isActive = false;

  /**
   * Handle files being dragged into the 'host' element.
   */
  @HostListener('dragenter', ['$event'])
  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.isActive = true;
  }

  /**
   * Handle files being dragged over the 'host' element.
   * This event must be absorbed for the 'drop' event to fire.
   */
  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Handle files being dragged away from the 'host' element.
   */
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.isActive = false;
  }

  /**
   * Handle files being dropped into the 'host' element.
   */
  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.isActive = false;

    if (event.dataTransfer !== null) {
      const files = event.dataTransfer.files;

      if (files.length > 0) {
        this.onFilesDrop.emit(files);
      }
    }
  }

  constructor() { }
}
