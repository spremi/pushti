//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private columns$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  breakpoints$: Subscription[] = [];

  constructor(private breakObs: BreakpointObserver) {
  }

  public columnObserver(): Observable<number> {
    return this.columns$.asObservable();
  }

  public init() {

    const obsSmall = this.breakObs.observe(Breakpoints.Small)
      .subscribe(result => {
        if (result.matches) {
          this.columns$.next(1);
        }
      });

    const obsMedium = this.breakObs.observe(Breakpoints.Medium)
      .subscribe(result => {
        if (result.matches) {
          this.columns$.next(2);
        }
      });

    const obsLarge = this.breakObs.observe(Breakpoints.Large)
      .subscribe(result => {
        if (result.matches) {
          this.columns$.next(3);
        }
      });

    this.breakpoints$.push(obsSmall);
    this.breakpoints$.push(obsMedium);
    this.breakpoints$.push(obsLarge);
  }

  public clear() {
    this.breakpoints$.forEach(sub => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}
