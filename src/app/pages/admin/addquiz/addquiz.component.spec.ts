import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquizComponent } from './addquiz.component';

describe('AddquizComponent', () => {
  let component: AddquizComponent;
  let fixture: ComponentFixture<AddquizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddquizComponent]
    });
    fixture = TestBed.createComponent(AddquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
