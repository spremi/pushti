import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnDefaultComponent } from './show-extn-default.component';

describe('ShowExtnDefaultComponent', () => {
  let component: ShowExtnDefaultComponent;
  let fixture: ComponentFixture<ShowExtnDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnDefaultComponent]
    });
    fixture = TestBed.createComponent(ShowExtnDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
