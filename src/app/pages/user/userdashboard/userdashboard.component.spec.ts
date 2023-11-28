import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardComponent } from './userdashboard.component';

describe('UserdashboardComponent', () => {
  let component: UserdashboardComponent;
  let fixture: ComponentFixture<UserdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdashboardComponent]
    });
    fixture = TestBed.createComponent(UserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
