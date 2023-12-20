import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPdfSignComponent } from './show-pdf-sign.component';

describe('ShowPdfSignComponent', () => {
  let component: ShowPdfSignComponent;
  let fixture: ComponentFixture<ShowPdfSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPdfSignComponent]
    });
    fixture = TestBed.createComponent(ShowPdfSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
