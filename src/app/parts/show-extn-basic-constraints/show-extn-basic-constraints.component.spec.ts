import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnBasicConstraintsComponent } from './show-extn-basic-constraints.component';

describe('ShowExtnBasicConstraintsComponent', () => {
  let component: ShowExtnBasicConstraintsComponent;
  let fixture: ComponentFixture<ShowExtnBasicConstraintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnBasicConstraintsComponent]
    });
    fixture = TestBed.createComponent(ShowExtnBasicConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
