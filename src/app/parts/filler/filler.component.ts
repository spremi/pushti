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
  selector: 'sp-filler',
  templateUrl: './filler.component.html',
  styleUrls: ['./filler.component.sass']
})
export class FillerComponent {
  @Input() select!: string;
}
