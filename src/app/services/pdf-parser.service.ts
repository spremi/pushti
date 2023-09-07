//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Injectable, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfParserService {

  readonly PAT_START = new RegExp("%PDF-1.[0-7]");
  readonly PAT_END = '%EOF\n';

  private sanitizer = inject(DomSanitizer);

  /**
   * We cannot create an empty/ null instance of Blob.
   * Emit a counter to indicate change in value.
   */
  private update$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private error$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private name = '';
  private objUrl!: string;
  private safeUrl: SafeResourceUrl | null = null;

  private count = 0;

  constructor() { }

  errorObserver(): Observable<string> {
    return this.error$.asObservable();
  }

  updateObserver(): Observable<number> {
    return this.update$.asObservable();
  }

  getName(): string {
    return this.name;
  }

  getPdf(): SafeUrl | null {
    return this.safeUrl;
  }

  public parse(name: string, contents: string): boolean {
    let ret = false;

    const fileStart = contents.slice(0, 9);
    const fileEnd = contents.slice(-5);

    if (this.PAT_START.test(fileStart) && (this.PAT_END === fileEnd)) {
      try {
        const buf = Uint8Array.from(contents, c => c.charCodeAt(0));
        const blob: Blob = new Blob([buf], { type: 'application/pdf' });

        this.objUrl = URL.createObjectURL(blob);
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.objUrl);

        if (this.safeUrl) {
          this.name = name;

          this.update$.next(++this.count);

          ret = true;
        }
      } catch (e) {
        if (e instanceof Error) {
          this.error$.next(e.message);
        } else if (typeof e === 'string') {
          this.error$.next(e);
        }
      }
    }

    return ret;
  }
}
