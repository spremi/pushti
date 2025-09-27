import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPdfSignTimestampComponent } from './show-pdf-sign-timestamp.component';

describe('ShowPdfSignTimestampComponent', () => {
  let component: ShowPdfSignTimestampComponent;
  let fixture: ComponentFixture<ShowPdfSignTimestampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPdfSignTimestampComponent]
    });
    fixture = TestBed.createComponent(ShowPdfSignTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
