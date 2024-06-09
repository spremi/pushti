//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { SpX509ExtnKeyUsage } from '@models/sp-x509-extn-key-usage';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'sp-show-extn-key-usage',
  templateUrl: './show-extn-key-usage.component.html',
  styleUrls: ['./show-extn-key-usage.component.sass']
})
export class ShowExtnKeyUsageComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  private settingsSvc = inject(SettingsService);

  keyUsage: SpX509ExtnKeyUsage | null = null;

  showAll = true;

  ngOnChanges(changes: SimpleChanges): void {
    this.showAll = this.settingsSvc.getAllKeyUsages();

    this.keyUsage = new SpX509ExtnKeyUsage();

    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          this.keyUsage.setValue(this.value);
        }
      }
    }
  }
}
