//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { DropOverlayService } from '@services/drop-overlay.service';

import { PreviousRouteService } from '@services/previous-route.service';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pushti-web';

  @ViewChild('main', { read: ElementRef })
  private body!: ElementRef;

  private dropOverlay = inject(DropOverlayService);

  @HostListener('dragenter', ['$event'])
  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.showDropZone();
  }

  constructor(private prevRouteSvc: PreviousRouteService) {
  }

  private showDropZone(): void {

    this.dropOverlay.show(this.body);
  }
}
