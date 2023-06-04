import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVersionComponent } from './show-version.component';

describe('ShowVersionComponent', () => {
  let component: ShowVersionComponent;
  let fixture: ComponentFixture<ShowVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowVersionComponent]
    });
    fixture = TestBed.createComponent(ShowVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
