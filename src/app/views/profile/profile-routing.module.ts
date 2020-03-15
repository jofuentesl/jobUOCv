import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudyDetailComponent }   from './study/study-detail/study-detail.component';
import { LanguageDetailComponent } from './language/language-detail/language-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
  path: 'student/student-detail/:id', component: StudentDetailComponent
  },
  {
  path: 'study/study-detail/:uid', component: StudyDetailComponent
  },
  {
  path: 'language/language-detail/:uid', component: LanguageDetailComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
