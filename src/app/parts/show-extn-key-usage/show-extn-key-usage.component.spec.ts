import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnKeyUsageComponent } from './show-extn-key-usage.component';

describe('ShowExtnKeyUsageComponent', () => {
  let component: ShowExtnKeyUsageComponent;
  let fixture: ComponentFixture<ShowExtnKeyUsageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnKeyUsageComponent]
    });
    fixture = TestBed.createComponent(ShowExtnKeyUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
