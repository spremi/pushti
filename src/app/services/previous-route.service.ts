//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {

  private prevRoute: string;
  private currRoute: string;

  /**
   * Navigation to these routes shall be ignored so that we
   * can quickly return to a functional page from series of
   * navigation through these pages.
   */
  readonly ignoredRoutes = [
    '/about',
    '/license',
  ];

  constructor(private router: Router) {
    this.currRoute = this.router.url;
    this.prevRoute = '';

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => {
        //
        // On Angular 16.x, the type of event is 'Event_2'.
        // It must be explicitly mapped to NavigationEnd. Else, compilation fails.
        //
        const e = event as NavigationEnd;
        return e;
      })
    ).subscribe((event: NavigationEnd) => {
      let newRoute = event.urlAfterRedirects;

      if (this.ignoredRoutes.indexOf(newRoute) > -1) {
        newRoute = '';
      }

      //
      // Ignore transitions between ignored routes.
      //
      if (this.currRoute !== newRoute) {
        this.prevRoute = this.currRoute;
        this.currRoute = newRoute;
      }
    });
  }

  public get(): string {
    return this.prevRoute;
  }
}
