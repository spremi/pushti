import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUniqueIdComponent } from './show-unique-id.component';

describe('ShowUniqueIdComponent', () => {
  let component: ShowUniqueIdComponent;
  let fixture: ComponentFixture<ShowUniqueIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowUniqueIdComponent]
    });
    fixture = TestBed.createComponent(ShowUniqueIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
