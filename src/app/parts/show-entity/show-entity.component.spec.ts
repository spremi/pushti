import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEntityComponent } from './show-entity.component';

describe('ShowEntityComponent', () => {
  let component: ShowEntityComponent;
  let fixture: ComponentFixture<ShowEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEntityComponent]
    });
    fixture = TestBed.createComponent(ShowEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
