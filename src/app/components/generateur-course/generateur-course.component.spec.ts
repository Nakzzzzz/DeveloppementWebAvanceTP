import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurCoursesComponent } from './generateur-course.component';

describe('GenerateurCourseComponent', () => {
  let component: GenerateurCoursesComponent;
  let fixture: ComponentFixture<GenerateurCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateurCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateurCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
