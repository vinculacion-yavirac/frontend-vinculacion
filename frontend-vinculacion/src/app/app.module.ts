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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    NopagesfoundComponent,
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
