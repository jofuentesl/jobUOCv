import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { LanguageComponent } from './language/language.component';
import { LanguageDetailComponent } from './language/language-detail/language-detail.component';
import { StudyComponent } from './study/study.component';
import { StudyDetailComponent } from './study/study-detail/study-detail.component';

@NgModule({
  declarations: [ ProfileComponent,
                  StudentComponent,
                  StudentDetailComponent,
                  LanguageComponent,
                  LanguageDetailComponent,
                  StudyComponent,
                  StudyDetailComponent ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
