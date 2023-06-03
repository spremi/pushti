//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PreviousRouteService } from '@services/previous-route.service';

@Component({
  selector: 'sp-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.sass']
})
export class LicenseComponent {

  constructor(private router: Router,
    private prevRouteSvc: PreviousRouteService) {
  }

  goBack(): void {
    const prev = this.prevRouteSvc.get();

    if (prev === '') {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl(prev);
    }
  }
}
