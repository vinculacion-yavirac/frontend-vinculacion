import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SpinnerComponent } from './loader/spinner/spinner.component';
import { NoContentComponent } from './no-content/no-content/no-content.component';
// import { ToastComponent } from './notification/toasts/toast-alert/toast/toast.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    MainComponent,
    SpinnerComponent,
    NoContentComponent,
    // ToastComponent,
    PaginationComponent,
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    MainComponent,
  ],
  imports:[
    CommonModule,
    SharedRoutingModule,
  ]

})
export class SharedModule { }
