import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers.component';
import { OffersStudentComponent } from './offers-student/offers-student.component';
import { OffersDetailComponent } from './offers-detail/offers-detail.component';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent 
  },
  {
    path:'offers-detail/:id', component: OffersDetailComponent
  },
  {
    path:'offers-student', component: OffersStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
