//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, Input } from '@angular/core';

@Component({
  selector: 'sp-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.sass']
})
export class IconLinkComponent {
  @Input() icon = '';
  @Input() label = '';
  @Input() link = '';
  @Input() disabled = false;
}
