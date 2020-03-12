import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
  path: 'student/:id',
  loadChildren: () =>
    import('./student/student.module').then(m => m.StudentModule),
  data: { title: 'Student' }
},
{
path: 'studies',
  loadChildren: () =>
    import('./studies/studies.module').then(m => m.StudiesModule),
  data: { title: 'Studies' }
},
{
  path: 'languages',
    loadChildren: () =>
      import('./languages/languages.module').then(m => m.LanguagesModule),
    data: { title: 'Languages' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
