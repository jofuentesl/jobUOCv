import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { JobOffersDetailComponent } from './job-offers-detail/job-offers-detail.component';
import { JobMyOffersComponent } from './job-my-offers/job-my-offers.component';
import { JobMyOffersDetailComponent } from './job-my-offers-detail/job-my-offers-detail.component';

@NgModule({
  declarations: [OffersComponent, JobOffersDetailComponent, JobMyOffersComponent, JobMyOffersDetailComponent],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
