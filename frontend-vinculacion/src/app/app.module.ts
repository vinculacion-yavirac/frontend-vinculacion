import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignarFundacionComponent } from './pages/docente-vinculacion/asignar-fundacion/asignar-fundacion.component';
import { ConfiguracionComponent } from './pages/docente-vinculacion/configuracion/configuracion.component';
import { SolicitudComponent } from './pages/docente-vinculacion/solicitud/solicitud.component';
import { PortafolioComponent } from './pages/docente-vinculacion/portafolio/portafolio.component';
import { ProyectoComponent } from './pages/docente-vinculacion/proyecto/proyecto.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    AsignarFundacionComponent,
    ConfiguracionComponent,
    SolicitudComponent,
    PortafolioComponent,
    ProyectoComponent,
    PagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
