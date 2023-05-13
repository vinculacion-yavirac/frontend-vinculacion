import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureModule } from '../feature/feature.module';
import { PagesModule } from '../pages/pages.module';


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
    PagesModule,
    // ChartsModule,
    // MaterialModule,
  ]
})
export class LayoutModule { }
