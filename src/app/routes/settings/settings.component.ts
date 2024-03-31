//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, OnInit, inject } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { PreviousRouteService } from '@services/previous-route.service';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'sp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  private router = inject(Router);
  private prevRouteSvc = inject(PreviousRouteService);

  private settingsSvc = inject(SettingsService);

  debug = false;
  allKeyUsages = false;

  ngOnInit(): void {
    this.debug = this.settingsSvc.getDebug();
    this.allKeyUsages = this.settingsSvc.getAllKeyUsages();
  }

  toggleDebug(ob: MatSlideToggleChange): void {
    this.settingsSvc.setDebug(ob.checked);
  }

  toggleAllKeyUsages(ob: MatSlideToggleChange): void {
    this.settingsSvc.setAllKeyUsages(ob.checked);
  }

  onSave(): void {
    this.settingsSvc.save();
  }

  onClose(): void {
    const prev = this.prevRouteSvc.get();

    if (prev === null) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl(prev);
    }
  }
}
