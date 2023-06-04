import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValidityComponent } from './show-validity.component';

describe('ShowValidityComponent', () => {
  let component: ShowValidityComponent;
  let fixture: ComponentFixture<ShowValidityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowValidityComponent]
    });
    fixture = TestBed.createComponent(ShowValidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
