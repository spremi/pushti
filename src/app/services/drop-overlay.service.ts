//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable, inject } from '@angular/core';
import { DropZoneComponent } from '@parts/drop-zone/drop-zone.component';

@Injectable({
  providedIn: 'root'
})
export class DropOverlayService {

  private overlay = inject(Overlay);
  private overlayRef!: OverlayRef;

  private posTop = '0px';
  private posLeft = '0px';
  private height = '0px';
  private width = '0px';

  constructor() {
  }

  public show(connectedTo: ElementRef): void {
    const bodyRect: DOMRect = connectedTo.nativeElement.getBoundingClientRect();

    //
    // Default Angular Material overrides the CSS 'position' property of
    // the overlay container.
    // To achieve the desired effect:
    // - Set position strategy as 'global', but empty.
    // - Save coordinates to the body element here.
    // - Use these coordinates while rendering the 'drop-zone' component.
    //
    this.posTop = bodyRect.top + 'px';
    this.posLeft = bodyRect.left + 'px';
    this.height = bodyRect.height + 'px';
    this.width = bodyRect.width + 'px';

    const overlayConfig: OverlayConfig = {
      positionStrategy: this.overlay.position().global(),
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      disposeOnNavigation: true,
    };

    this.overlayRef = this.overlay.create(overlayConfig);

    const dropZonePortal = new ComponentPortal(DropZoneComponent);
    this.overlayRef.attach(dropZonePortal);
  }

  public hide(): void {
    this.overlayRef.dispose();
  }

  public getTop(): string {
    return this.posTop;
  }

  public getLeft(): string {
    return this.posLeft;
  }

  public getWidth(): string {
    return this.width;
  }

  public getHeight(): string {
    return this.height;
  }
}
