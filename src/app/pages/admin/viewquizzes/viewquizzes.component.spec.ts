import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizzesComponent } from './viewquizzes.component';

describe('ViewquizzesComponent', () => {
  let component: ViewquizzesComponent;
  let fixture: ComponentFixture<ViewquizzesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewquizzesComponent]
    });
    fixture = TestBed.createComponent(ViewquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
