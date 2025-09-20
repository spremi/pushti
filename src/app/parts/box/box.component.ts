//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import {
  Component, ElementRef, EventEmitter, HostBinding, Inject, Input, Output, ViewChild, inject
} from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { MatIcon } from '@angular/material/icon';

import { BOX_LEVEL, BOX_LEVEL_PROVIDER } from './level.token';

@Component({
  selector: 'sp-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.sass'],
  providers: [
    BOX_LEVEL_PROVIDER
  ]
})
export class BoxComponent {
  @Input() title = '';
  @Input() oid = '';
  @Input() extn = false;
  @Input() extnCritical = false;
  @Input() mode = '';
  @Output() copy = new EventEmitter<any>();

  @ViewChild('copyIcon') icon!: MatIcon;

  @HostBinding('class')
  get hostClass() {
    return `level-${this.level}`;
  }

  private elRef = inject(ElementRef);
  private clipboard = inject(Clipboard);

  theme = 'theme-0';

  level: number;

  constructor(@Inject(BOX_LEVEL) level: number) {
    this.level = level;
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
