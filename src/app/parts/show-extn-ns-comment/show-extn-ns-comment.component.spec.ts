import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExtnNsCommentComponent } from './show-extn-ns-comment.component';

describe('ShowExtnNsCommentComponent', () => {
  let component: ShowExtnNsCommentComponent;
  let fixture: ComponentFixture<ShowExtnNsCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExtnNsCommentComponent]
    });
    fixture = TestBed.createComponent(ShowExtnNsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
