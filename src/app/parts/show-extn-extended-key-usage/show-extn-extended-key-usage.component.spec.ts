import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnExtendedKeyUsageComponent } from './show-extn-extended-key-usage.component';

describe('ShowExtnExtendedKeyUsageComponent', () => {
  let component: ShowExtnExtendedKeyUsageComponent;
  let fixture: ComponentFixture<ShowExtnExtendedKeyUsageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnExtendedKeyUsageComponent]
    });
    fixture = TestBed.createComponent(ShowExtnExtendedKeyUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
