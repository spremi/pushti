import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFingerprintsComponent } from './show-fingerprints.component';

describe('ShowFingerprintsComponent', () => {
  let component: ShowFingerprintsComponent;
  let fixture: ComponentFixture<ShowFingerprintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFingerprintsComponent]
    });
    fixture = TestBed.createComponent(ShowFingerprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
