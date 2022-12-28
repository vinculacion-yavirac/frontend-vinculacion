import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFundacionesComponent } from './docente-tutor/lista-fundaciones/lista-fundaciones.component';
import { ListaEstudiantesComponent } from './docente-tutor/lista-estudiantes/lista-estudiantes.component';
import { PortafolioComponent } from './docente-tutor/portafolio/portafolio.component';
import { AsignarFundacionComponent } from './docente-vinculacion/asignar-fundacion/asignar-fundacion.component';
import { ConfiguracionComponent } from './docente-vinculacion/configuracion/configuracion.component';
import { ProyectoComponent } from './docente-vinculacion/proyecto/proyecto.component';
import { SolicitudComponent } from './docente-vinculacion/solicitud/solicitud.component';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListaFundacionesComponent,
    ListaEstudiantesComponent,
    PortafolioComponent,
    AsignarFundacionComponent,
    ConfiguracionComponent,
    // PortafolioComponent,
    ProyectoComponent,
    SolicitudComponent,
  ],
  exports:[
    AsignarFundacionComponent,
    ConfiguracionComponent,
    PortafolioComponent,
    ProyectoComponent,
    SolicitudComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class PagesModule { }
