//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'sp-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.sass']
})
export class BoxComponent implements OnInit {
  @Input() title = '';
  @Input() oid = '';
  @Input() extn = false;
  @Input() extnCritical = false;
  @Input() mode = '';
  @Output() copy = new EventEmitter<any>();

  @ViewChild('copyIcon') icon!: MatIcon;

  private elRef = inject(ElementRef);
  private clipboard = inject(Clipboard);

  theme = 'theme-0';

  ngOnInit(): void {
    if (this.extn) {
      this.theme = 'theme-1';
    } else if (this.mode.startsWith('pdf')) {
      this.theme = this.mode;
    }
  }

  onCopyContent(): void {
    const iconElem = this.icon._elementRef.nativeElement;

    iconElem.classList.add('ring');

    setTimeout(() => {
      iconElem.classList.remove('ring');
    }, 1000);

    const text = this.elRef.nativeElement.innerText;

    //
    // Remove icon names from copied text
    //
    const ret = text.replaceAll('content_copy', '').replaceAll('read_more', '');

    this.clipboard.copy(ret);

    this.copy.emit();
  }
}
