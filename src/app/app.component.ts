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

import { PreviousRouteService } from '@services/previous-route.service';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pushti-web';

  constructor(private prevRouteSvc: PreviousRouteService) {
  }
}
