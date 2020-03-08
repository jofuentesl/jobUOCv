import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';

import { StudiesComponent } from './studies/studies.component';
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [ProfileComponent,  StudiesComponent, LanguagesComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
