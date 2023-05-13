import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';


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
    LayoutRoutingModule,
    // FeatureModule,
    // ChartsModule,
    // MaterialModule,
  ]
})
export class LayoutModule { }
