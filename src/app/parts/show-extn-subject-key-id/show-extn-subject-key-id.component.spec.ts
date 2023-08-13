import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnSubjectKeyIdComponent } from './show-extn-subject-key-id.component';

describe('ShowExtnSubjectKeyIdComponent', () => {
  let component: ShowExtnSubjectKeyIdComponent;
  let fixture: ComponentFixture<ShowExtnSubjectKeyIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnSubjectKeyIdComponent]
    });
    fixture = TestBed.createComponent(ShowExtnSubjectKeyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
