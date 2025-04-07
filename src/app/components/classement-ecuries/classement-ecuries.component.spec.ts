import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementEcuriesComponent } from './classement-ecuries.component';

describe('ClassementEcuriesComponent', () => {
  let component: ClassementEcuriesComponent;
  let fixture: ComponentFixture<ClassementEcuriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassementEcuriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassementEcuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
