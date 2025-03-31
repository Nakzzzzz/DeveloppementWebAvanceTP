import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClassementComponent } from './components/classement/classement.component';
import { GenerateurCoursesComponent } from './components/generateur-course/generateur-course.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'classement', component: ClassementComponent },
  { path: 'generateur-course', component: GenerateurCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
