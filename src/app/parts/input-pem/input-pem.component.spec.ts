import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPemComponent } from './input-pem.component';

describe('InputPemComponent', () => {
  let component: InputPemComponent;
  let fixture: ComponentFixture<InputPemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputPemComponent]
    });
    fixture = TestBed.createComponent(InputPemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
