//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { DropOverlayService } from '@services/drop-overlay.service';
import { LayoutService } from '@services/layout.service';

import { PreviousRouteService } from '@services/previous-route.service';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'pushti-web';

  @ViewChild('main', { read: ElementRef })
  private body!: ElementRef;

  private dropOverlay = inject(DropOverlayService);

  private settingsSvc = inject(SettingsService);

  @HostListener('dragenter', ['$event'])
  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.showDropZone();
  }

  constructor(
    private prevRouteSvc: PreviousRouteService,
    private layoutSvc: LayoutService) {
  }

  ngOnInit(): void {
    this.layoutSvc.init();
    this.settingsSvc.init();
  }

  ngOnDestroy(): void {
    this.layoutSvc.clear();
  }

  private showDropZone(): void {

    this.dropOverlay.show(this.body);
  }
}
