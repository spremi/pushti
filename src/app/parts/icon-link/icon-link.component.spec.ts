import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLinkComponent } from './icon-link.component';

describe('IconLinkComponent', () => {
  let component: IconLinkComponent;
  let fixture: ComponentFixture<IconLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconLinkComponent]
    });
    fixture = TestBed.createComponent(IconLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
