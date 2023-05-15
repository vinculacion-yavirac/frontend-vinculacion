import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { FeatureModule } from '../feature/feature.module';
import { ChartsModule } from 'ng2-charts';
//import { ModalAlertComponent } from '../shared/material/modal-alert/modal-alert.component';

@NgModule({
  declarations: [
    HeaderComponent,
    // ModalAlertComponent,
    SidebarComponent,
    MainComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FeatureModule,
    LayoutRoutingModule,
    ChartsModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
