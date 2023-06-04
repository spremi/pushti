import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubjectPublicKeyComponent } from './show-subject-public-key.component';

describe('ShowSubjectPublicKeyComponent', () => {
  let component: ShowSubjectPublicKeyComponent;
  let fixture: ComponentFixture<ShowSubjectPublicKeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSubjectPublicKeyComponent]
    });
    fixture = TestBed.createComponent(ShowSubjectPublicKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
