import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnCertPolicyComponent } from './show-extn-cert-policy.component';

describe('ShowExtnCertPolicyComponent', () => {
  let component: ShowExtnCertPolicyComponent;
  let fixture: ComponentFixture<ShowExtnCertPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnCertPolicyComponent]
    });
    fixture = TestBed.createComponent(ShowExtnCertPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
