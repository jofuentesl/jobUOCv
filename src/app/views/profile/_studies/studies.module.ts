import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { StudiesComponent } from './studies.component';
import { StudiestRoutingModule } from './studies-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ StudiesComponent ],
  imports: [
    CommonModule,
    SharedModule,
    StudiestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudiesModule { }
