import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnIssuerAltNameComponent } from './show-extn-issuer-alt-name.component';

describe('ShowExtnIssuerAltNameComponent', () => {
  let component: ShowExtnIssuerAltNameComponent;
  let fixture: ComponentFixture<ShowExtnIssuerAltNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnIssuerAltNameComponent]
    });
    fixture = TestBed.createComponent(ShowExtnIssuerAltNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
