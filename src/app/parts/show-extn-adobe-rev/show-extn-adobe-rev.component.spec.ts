import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnAdobeRevComponent } from './show-extn-adobe-rev.component';

describe('ShowExtnAdobeRevComponent', () => {
  let component: ShowExtnAdobeRevComponent;
  let fixture: ComponentFixture<ShowExtnAdobeRevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnAdobeRevComponent]
    });
    fixture = TestBed.createComponent(ShowExtnAdobeRevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
