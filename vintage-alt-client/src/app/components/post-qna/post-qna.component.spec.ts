import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQnaComponent } from './post-qna.component';

describe('PostQnaComponent', () => {
  let component: PostQnaComponent;
  let fixture: ComponentFixture<PostQnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostQnaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostQnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
