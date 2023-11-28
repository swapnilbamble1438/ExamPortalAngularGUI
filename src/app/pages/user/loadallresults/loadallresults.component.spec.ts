import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadallresultsComponent } from './loadallresults.component';

describe('LoadallresultsComponent', () => {
  let component: LoadallresultsComponent;
  let fixture: ComponentFixture<LoadallresultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadallresultsComponent]
    });
    fixture = TestBed.createComponent(LoadallresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
