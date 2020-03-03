import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutComponent } from './admin-layout.component';
import { AdminRoutingModule } from './admin-layout-routing.module';

@NgModule({
  declarations: [ AdminLayoutComponent, AdminRoutingModule ],
  imports: [
    CommonModule
    
  ]
})
export class AdminLayoutModule { }
