import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import {HttpClientModule } from '@angular/common/http';
import { RedireccionarComponent } from './redireccionar/redireccionar.component';
import { AgregarRolComponent } from './agregar-rol/agregar-rol.component';
import { RellenarDatosComponent } from './rellenar-datos/rellenar-datos.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { ListaPortafoliosComponent } from './lista-portafolios/lista-portafolios.component';



@NgModule({
  declarations: [
    AppComponent,
    RedireccionarComponent,
    AgregarRolComponent,
    RellenarDatosComponent,
    ListaEstudiantesComponent,
    ListaPortafoliosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    // SharedModule,
    // AuthModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
