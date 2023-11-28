import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizstartComponent } from './quizstart.component';

describe('QuizstartComponent', () => {
  let component: QuizstartComponent;
  let fixture: ComponentFixture<QuizstartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizstartComponent]
    });
    fixture = TestBed.createComponent(QuizstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
