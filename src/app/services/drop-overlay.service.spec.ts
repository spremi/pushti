import { TestBed } from '@angular/core/testing';

import { DropOverlayService } from './drop-overlay.service';

describe('DropOverlayService', () => {
  let service: DropOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
