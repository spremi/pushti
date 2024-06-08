//
// @project     pushti-web
//
// @author      Sanjeev Premi <spremi@ymail.com>
//
// @license     BSD-3-Clause
//
// (c) Copyright 2023 Sanjeev Premi.
//

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SpX509ExtnNsComment } from '@models/sp-x509-extn-ns-comment';

@Component({
  selector: 'sp-show-extn-ns-comment',
  templateUrl: './show-extn-ns-comment.component.html',
  styleUrls: ['./show-extn-ns-comment.component.sass']
})
export class ShowExtnNsCommentComponent implements OnChanges {
  @Input() oid = '';
  @Input() critical = false;
  @Input() value!: Uint8Array;

  comment = '';

  ngOnChanges(changes: SimpleChanges): void {
    for (const attr in changes) {
      if (attr === 'value') {
        this.value = changes[attr].currentValue;

        if (this.value) {
          const nsComment = new SpX509ExtnNsComment();
          nsComment.setValue(this.value);

          this.comment = nsComment.getComment();

        } else {
          this.comment = '';
        }
      }
    }
  }
}
