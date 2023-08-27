import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarShellComponent } from './nav-bar-shell.component';

describe('NavBarShellComponent', () => {
  let component: NavBarShellComponent;
  let fixture: ComponentFixture<NavBarShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarShellComponent]
    });
    fixture = TestBed.createComponent(NavBarShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
