import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';


@NgModule({
  declarations: [ProfileComponent, StudentComponent, StudentDetailComponent ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule

  ]
})
export class ProfileModule { }
