import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnAdobeTsComponent } from './show-extn-adobe-ts.component';

describe('ShowExtnAdobeTsComponent', () => {
  let component: ShowExtnAdobeTsComponent;
  let fixture: ComponentFixture<ShowExtnAdobeTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnAdobeTsComponent]
    });
    fixture = TestBed.createComponent(ShowExtnAdobeTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
