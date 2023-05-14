import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { FeatureModule } from './feature/feature.module';
import { LoginComponent } from './auth/login/login.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { BreadcrumbsComponent } from './auth/profile/breadcrumbs/breadcrumbs.component';
import { GeneralComponent } from './auth/profile/general/general.component';
import { MainComponent } from './auth/profile/main/main.component';
import { SeguridadComponent } from './auth/profile/seguridad/seguridad.component';
import { SidebarComponent } from './auth/profile/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    NopagesfoundComponent, BreadcrumbsComponent, GeneralComponent, MainComponent, SeguridadComponent, SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    // MaterialModule,
    FeatureModule,
    // LayoutModule,
    LayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
