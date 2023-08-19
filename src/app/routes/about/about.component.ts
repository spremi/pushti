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
import { PreviousRouteService } from '@services/previous-route.service';

@Component({
  selector: 'sp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  private router = inject(Router);
  private prevRouteSvc = inject(PreviousRouteService);

  onDismiss(): void {
    const prev = this.prevRouteSvc.get();

    if (prev === null) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl(prev);
    }
  }
}
