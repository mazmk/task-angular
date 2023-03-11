import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComp1Component } from './shared-comp1.component';

describe('SharedComp1Component', () => {
  let component: SharedComp1Component;
  let fixture: ComponentFixture<SharedComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedComp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
