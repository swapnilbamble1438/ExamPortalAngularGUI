import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwelcomeComponent } from './userwelcome.component';

describe('UserwelcomeComponent', () => {
  let component: UserwelcomeComponent;
  let fixture: ComponentFixture<UserwelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserwelcomeComponent]
    });
    fixture = TestBed.createComponent(UserwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
