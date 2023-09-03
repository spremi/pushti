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

  ngOnInit(): void {
    this.routerEvents$ = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    ).subscribe((e) => {
      this.url = e.url;
    });
  }

  ngOnDestroy(): void {
    if (this.routerEvents$) {
      this.routerEvents$.unsubscribe();
    }

  }
}
