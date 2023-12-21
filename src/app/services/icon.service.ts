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
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconInfo, IconSet } from '@models/icon-info';

/**
 * List of icons used.
 */
export const AppIcons: IconSet = {
  path: 'assets/icons/',
  list: [
    {
      icon: 'apps',
      file: 'pushti-icon.svg',
    },
    {
      icon: 'attribution',
      file: 'attribution.svg',
    },
    {
      icon: 'certificate',
      file: 'workspace_premium.svg',
    },
    {
      icon: 'copyright',
      file: 'copyright.svg',
    },
    {
      icon: 'home',
      file: 'cottage.svg',
    },
    {
      icon: 'info',
      file: 'info.svg',
    },
    {
      icon: 'license',
      file: 'contract.svg',
    },
    {
      icon: 'pdf',
      file: 'description.svg',
    },
    {
      icon: 'settings',
      file: 'settings.svg',
    },
    {
      icon: 'verified',
      file: 'verified.svg',
    },
    {
      icon: 'warning',
      file: 'warning.svg',
    },
  ],
};

export const ActionIcons: IconSet = {
  path: 'assets/icons/',
  list: [
    {
      icon: 'close',
      file: 'close.svg',
    },
    {
      icon: 'content_copy',
      file: 'content_copy.svg',
    },
    {
      icon: 'read_more',
      file: 'read_more.svg',
    },
    {
      icon: 'refresh',
      file: 'refresh.svg',
    },
    {
      icon: 'upload',
      file: 'upload.svg',
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class IconService {

  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer) { }

  register(): void {
    this.registerSet(AppIcons);
    this.registerSet(ActionIcons);
  }

  /**
   * Register icons in the specified set.
   */
  private registerSet(icons: IconSet): void {
    if (icons.list.length === 0) {
      return;
    }

    icons.list.forEach((arg: IconInfo) => {
      const iconPath = (icons.path + '/' + arg.file).replace('//', '/');

      this.registry.addSvgIcon(
        arg.icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(iconPath));
    });
  }
}
