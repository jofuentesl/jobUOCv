import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule} from '@angular/forms';
import { AdminLayoutModule } from './components/layouts/admin-layout/admin-layout.module';

/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */

// COMPONENTS

// DIRECTIVES

// PIPES

// SERVICES
import { AppConfirmService } from './services/app-confirm/app-confirm.service';
import { AppComfirmComponent } from './services/app-confirm/app-confirm.component';



const classesToInclude = [AppComfirmComponent];

@NgModule({
  imports: [CommonModule,
            FormsModule,
            RouterModule, ReactiveFormsModule,
            AdminLayoutModule
          ],

  providers: [AppConfirmService],
  entryComponents: [AppComfirmComponent],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule {}
