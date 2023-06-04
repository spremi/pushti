import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSerialNumComponent } from './show-serial-num.component';

describe('ShowSerialNumComponent', () => {
  let component: ShowSerialNumComponent;
  let fixture: ComponentFixture<ShowSerialNumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSerialNumComponent]
    });
    fixture = TestBed.createComponent(ShowSerialNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
