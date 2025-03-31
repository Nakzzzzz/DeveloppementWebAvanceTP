import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurCourseComponent } from './generateur-course.component';

describe('GenerateurCourseComponent', () => {
  let component: GenerateurCourseComponent;
  let fixture: ComponentFixture<GenerateurCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateurCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateurCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
