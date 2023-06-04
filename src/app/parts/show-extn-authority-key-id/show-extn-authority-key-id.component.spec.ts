import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnAuthorityKeyIdComponent } from './show-extn-authority-key-id.component';

describe('ShowExtnAuthorityKeyIdComponent', () => {
  let component: ShowExtnAuthorityKeyIdComponent;
  let fixture: ComponentFixture<ShowExtnAuthorityKeyIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnAuthorityKeyIdComponent]
    });
    fixture = TestBed.createComponent(ShowExtnAuthorityKeyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
