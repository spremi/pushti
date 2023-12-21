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

/**
 * Temporary storage for certificates found in a PDF.
 * Enables faster decoding...
 */
@Injectable({
  providedIn: 'root'
})
export class CacheService {

  certificates: string[] = [];

  constructor() { }

  add(cert: string): void {
    this.certificates.push(cert);
  }

  get(index: number): string {
    if (index >= 0 && index < this.certificates.length) {
      return this.certificates[index];
    }

    return '';
  }

  clear(): void {
    this.certificates = [];
  }
}
