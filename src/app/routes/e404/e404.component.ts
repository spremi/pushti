//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.sass']
})
export class E404Component {

  private router = inject(Router);

  go(): void {
    this.router.navigate(['/home'], { replaceUrl: true });
  }
}
