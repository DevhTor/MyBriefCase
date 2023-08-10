import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueButton2Component } from './blue-button2.component';

describe('BlueButton2Component', () => {
  let component: BlueButton2Component;
  let fixture: ComponentFixture<BlueButton2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueButton2Component]
    });
    fixture = TestBed.createComponent(BlueButton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
