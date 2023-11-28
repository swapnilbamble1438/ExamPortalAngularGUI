import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizintroComponent } from './quizintro.component';

describe('QuizintroComponent', () => {
  let component: QuizintroComponent;
  let fixture: ComponentFixture<QuizintroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizintroComponent]
    });
    fixture = TestBed.createComponent(QuizintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
