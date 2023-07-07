//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sp-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.sass']
})
export class BoxComponent {
  @Input() title = '';
  @Input() oid = '';
  @Output() copy = new EventEmitter<any>();

  onCopyContent(): void {
    this.copy.emit();
  }
}
