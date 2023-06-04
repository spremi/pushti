import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnSubjectAltNameComponent } from './show-extn-subject-alt-name.component';

describe('ShowExtnSubjectAltNameComponent', () => {
  let component: ShowExtnSubjectAltNameComponent;
  let fixture: ComponentFixture<ShowExtnSubjectAltNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnSubjectAltNameComponent]
    });
    fixture = TestBed.createComponent(ShowExtnSubjectAltNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
