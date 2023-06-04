import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtensionsComponent } from './show-extensions.component';

describe('ShowExtensionsComponent', () => {
  let component: ShowExtensionsComponent;
  let fixture: ComponentFixture<ShowExtensionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtensionsComponent]
    });
    fixture = TestBed.createComponent(ShowExtensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
