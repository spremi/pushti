//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'sp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private router = inject(Router);

  private routerEvents$!: Subscription;

  url = '';

  disableCert = false;
  disablePdf = false;

  ngOnInit(): void {
    this.routerEvents$ = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    ).subscribe((e) => {
      this.url = e.url;

      if (this.url === '/home') {
        this.disableCert = false;
        this.disablePdf = false;

        return;
      }

      if (this.url === '/cert' || this.url.startsWith('/cert/pdf/')) {
        this.disableCert = true;
        this.disablePdf = false;

        return;
      }

      if (this.url === '/pdf') {
        this.disableCert = false;
        this.disablePdf = true;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerEvents$) {
      this.routerEvents$.unsubscribe();
    }

  }
}
