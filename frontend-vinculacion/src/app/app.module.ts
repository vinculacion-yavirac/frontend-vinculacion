import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import {HttpClientModule } from '@angular/common/http';
import { AgregarRolComponent } from './pages/coordinador-carrera/agregar-rol/agregar-rol.component';
import { ListaEstudiantesComponent } from './pages/coordinador-carrera/lista-estudiantes/lista-estudiantes.component';
import { ListaPortafoliosComponent } from './pages/coordinador-carrera/lista-portafolios/lista-portafolios.component';
import { RedireccionarComponent } from './pages/coordinador-carrera/redireccionar/redireccionar.component';
import { RellenarDatosComponent } from './pages/coordinador-carrera/rellenar-datos/rellenar-datos.component';



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
