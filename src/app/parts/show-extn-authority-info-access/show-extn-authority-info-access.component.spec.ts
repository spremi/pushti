import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnAuthorityInfoAccessComponent } from './show-extn-authority-info-access.component';

describe('ShowExtnAuthorityInfoAccessComponent', () => {
  let component: ShowExtnAuthorityInfoAccessComponent;
  let fixture: ComponentFixture<ShowExtnAuthorityInfoAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnAuthorityInfoAccessComponent]
    });
    fixture = TestBed.createComponent(ShowExtnAuthorityInfoAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
