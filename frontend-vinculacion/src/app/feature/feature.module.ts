import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SolicitudListComponent } from './solicitud/list/solicitud-list.component';



@NgModule({
  declarations: [
    SolicitudListComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MaterialModule,
    NgxPaginationModule,
  ],
  exports: [
    // AgePipe,
    // TimeAgoPipe,
    // CapitalizePipe,
    // SpinnerComponent,
    // NameInitialsPipe,
    // FullNameShortPipe,
    // NoContentComponent,
    NgxPaginationModule,
    // PaginationComponent,
    // FullNameFirstMiddlePipe,
    // HasPermissionsDirective,
  ],
})
export class FeatureModule { }
