import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizquestionsComponent } from './viewquizquestions.component';

describe('ViewquizquestionsComponent', () => {
  let component: ViewquizquestionsComponent;
  let fixture: ComponentFixture<ViewquizquestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewquizquestionsComponent]
    });
    fixture = TestBed.createComponent(ViewquizquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
