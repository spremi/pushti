import { DatePipe } from '@angular/common';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SpCertPreview } from '@models/sp-cert-preview';
import { SpPkcs9TimestampInfo } from '@models/sp-pkcs9-timestamp-info';
import { CacheService } from '@services/cache.service';

@Component({
  selector: 'sp-show-pdf-sign-timestamp',
  templateUrl: './show-pdf-sign-timestamp.component.html',
  styleUrls: ['./show-pdf-sign-timestamp.component.sass'],
  providers: [
    DatePipe
  ]
})
export class ShowPdfSignTimestampComponent implements OnChanges {
  @Input() value: SpPkcs9TimestampInfo | null = null;
  @Input() certOffset = 1;    // There is at least 1 valid certificate

  private router = inject(Router);
  private cacheSvc = inject(CacheService);
  private datePipe = inject(DatePipe);

  readonly DATE_FORMAT = 'EEE, dd MMM yyyy, HH:mm:ss';

  tsLocal = '';
  tsUTC = '';

  certPreview: SpCertPreview[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        this.init();
      }
    }
  }

  private init(): void {
    if (!!this.value) {
      const timestamp = new Date(this.value.getTimestamp());

      this.tsLocal = this.datePipe.transform(timestamp, this.DATE_FORMAT) ?? '';
      this.tsUTC = this.datePipe.transform(timestamp, this.DATE_FORMAT, 'UTC') ?? '';

      this.certPreview = this.value.getCertificates() ?? null;
      if (this.certPreview) {
        this.certPreview.forEach(arg => {
          this.cacheSvc.add(arg.getRaw());
        });
      }
    }
  }

  details(index: number): void {
    this.router.navigate(['cert', 'pdf', index]);
  }
}
