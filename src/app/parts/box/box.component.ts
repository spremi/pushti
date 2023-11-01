//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { MatIcon } from '@angular/material/icon';

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

  @ViewChild('copyIcon') icon!: MatIcon;

  private elRef = inject(ElementRef);
  private clipboard = inject(Clipboard);

  onCopyContent(): void {
    const iconElem = this.icon._elementRef.nativeElement;

    iconElem.classList.add('ring');

    setTimeout(() => {
      iconElem.classList.remove('ring');
    }, 1000);

    const text = this.elRef.nativeElement.innerText;

    // Remove instances of 'content_copy' (name of the icon)
    this.clipboard.copy(text.replaceAll('content_copy', ''));

    this.copy.emit();
  }
}
