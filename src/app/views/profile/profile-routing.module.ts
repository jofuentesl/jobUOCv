import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
  path: 'student/student-detail/:id', component: StudentDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
