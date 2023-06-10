import { TestBed } from '@angular/core/testing';

import { CertificateParserService } from './certificate-parser.service';

describe('CertificateParserService', () => {
  let service: CertificateParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificateParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
