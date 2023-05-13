import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpinnerComponent } from '../shared/loader/spinner/spinner.component';
import { NoContentComponent } from '../shared/no-content/no-content/no-content.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';


@NgModule({
  declarations: [],
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
    SpinnerComponent,
    // NameInitialsPipe,
    // FullNameShortPipe,
    NoContentComponent,
    NgxPaginationModule,
    PaginationComponent,
    // FullNameFirstMiddlePipe,
    // HasPermissionsDirective,
  ],
})
export class FeatureModule { }
