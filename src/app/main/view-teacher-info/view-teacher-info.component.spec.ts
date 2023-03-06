import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherInfoComponent } from './view-teacher-info.component';

describe('ViewTeacherInfoComponent', () => {
  let component: ViewTeacherInfoComponent;
  let fixture: ComponentFixture<ViewTeacherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTeacherInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTeacherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
