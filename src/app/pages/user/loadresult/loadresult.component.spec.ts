import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadresultComponent } from './loadresult.component';

describe('LoadresultComponent', () => {
  let component: LoadresultComponent;
  let fixture: ComponentFixture<LoadresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadresultComponent]
    });
    fixture = TestBed.createComponent(LoadresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
