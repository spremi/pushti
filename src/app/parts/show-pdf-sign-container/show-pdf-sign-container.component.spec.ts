import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPdfSignContainerComponent } from './show-pdf-sign-container.component';

describe('ShowPdfSignContainerComponent', () => {
  let component: ShowPdfSignContainerComponent;
  let fixture: ComponentFixture<ShowPdfSignContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPdfSignContainerComponent]
    });
    fixture = TestBed.createComponent(ShowPdfSignContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
