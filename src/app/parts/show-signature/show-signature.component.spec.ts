import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSignatureComponent } from './show-signature.component';

describe('ShowSignatureComponent', () => {
  let component: ShowSignatureComponent;
  let fixture: ComponentFixture<ShowSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSignatureComponent]
    });
    fixture = TestBed.createComponent(ShowSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
