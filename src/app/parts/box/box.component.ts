//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, ElementRef, EventEmitter, Input, Output, inject } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'sp-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.sass']
})
export class BoxComponent {
  @Input() title = '';
  @Input() oid = '';
  @Input() extn = false;
  @Input() extnCritical = false;
  @Output() copy = new EventEmitter<any>();

  private elRef = inject(ElementRef);
  private clipboard = inject(Clipboard);

  onCopyContent(): void {
    const text = this.elRef.nativeElement.innerText;

    // Remove instances of 'content_copy' (name of the icon)
    this.clipboard.copy(text.replaceAll('content_copy', ''));

    this.copy.emit();
  }
}
