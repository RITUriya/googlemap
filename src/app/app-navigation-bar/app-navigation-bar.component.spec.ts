import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavigationBarComponent } from './app-navigation-bar.component';

describe('AppNavigationBarComponent', () => {
  let component: AppNavigationBarComponent;
  let fixture: ComponentFixture<AppNavigationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppNavigationBarComponent]
    });
    fixture = TestBed.createComponent(AppNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
