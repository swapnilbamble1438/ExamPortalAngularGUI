import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequizComponent } from './updatequiz.component';

describe('UpdatequizComponent', () => {
  let component: UpdatequizComponent;
  let fixture: ComponentFixture<UpdatequizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatequizComponent]
    });
    fixture = TestBed.createComponent(UpdatequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
