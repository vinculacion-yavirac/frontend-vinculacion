import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { ProfileBreadcrumbsComponent } from './auth/profile/breadcrumbs/breadcrumbs.component';
import { ProfilePersonalDataComponent } from './auth/profile/general/general.component';
import { SeguridadComponent } from './auth/profile/seguridad/seguridad.component';
import { NoContentComponent } from './shared/no-content/no-content.component';
import { IdentificationTypesComboboxComponent } from './shared/comboboxes/tipos-identificacion/tipos-identificacion.combobox.component';
import { GendersComboboxComponent } from './shared/comboboxes/generos/genders-combobox.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './feature/feature.module';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    NopagesfoundComponent, 
    ProfileBreadcrumbsComponent, 
    ProfilePersonalDataComponent, 
    //MainComponent, 
    SeguridadComponent, 
    //SidebarComponent, 
    NoContentComponent, 
    IdentificationTypesComboboxComponent,
    GendersComboboxComponent,
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
