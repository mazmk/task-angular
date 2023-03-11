import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComp2Component } from './shared-comp2.component';

describe('SharedComp2Component', () => {
  let component: SharedComp2Component;
  let fixture: ComponentFixture<SharedComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedComp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
