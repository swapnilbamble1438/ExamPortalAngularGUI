import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequestionComponent } from './updatequestion.component';

describe('UpdatequestionComponent', () => {
  let component: UpdatequestionComponent;
  let fixture: ComponentFixture<UpdatequestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatequestionComponent]
    });
    fixture = TestBed.createComponent(UpdatequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
