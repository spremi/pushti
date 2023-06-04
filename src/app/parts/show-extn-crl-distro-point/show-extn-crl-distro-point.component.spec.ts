import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnCrlDistroPointComponent } from './show-extn-crl-distro-point.component';

describe('ShowExtnCrlDistroPointComponent', () => {
  let component: ShowExtnCrlDistroPointComponent;
  let fixture: ComponentFixture<ShowExtnCrlDistroPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnCrlDistroPointComponent]
    });
    fixture = TestBed.createComponent(ShowExtnCrlDistroPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
