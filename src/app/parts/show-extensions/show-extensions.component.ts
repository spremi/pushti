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
import { SpX509Extension } from '@models/sp-x509-extension';

@Component({
  selector: 'sp-show-extensions',
  templateUrl: './show-extensions.component.html',
  styleUrls: ['./show-extensions.component.sass']
})
export class ShowExtensionsComponent {
  @Input() extensions!: SpX509Extension[];
}
