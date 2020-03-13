import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';


/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */

// COMPONENTS

// DIRECTIVES

// PIPES

// SERVICES
import { AppConfirmService } from './services/app-confirm/app-confirm.service';
import { AppComfirmComponent } from './services/app-confirm/app-confirm.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';



const classesToInclude = [AppComfirmComponent, AdminLayoutComponent ];

@NgModule({
  imports: [CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule
          ],

  providers: [AppConfirmService],
  entryComponents: [AppComfirmComponent],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule {}
