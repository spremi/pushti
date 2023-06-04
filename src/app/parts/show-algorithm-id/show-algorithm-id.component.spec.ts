import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlgorithmIdComponent } from './show-algorithm-id.component';

describe('ShowAlgorithmIdComponent', () => {
  let component: ShowAlgorithmIdComponent;
  let fixture: ComponentFixture<ShowAlgorithmIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAlgorithmIdComponent]
    });
    fixture = TestBed.createComponent(ShowAlgorithmIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
