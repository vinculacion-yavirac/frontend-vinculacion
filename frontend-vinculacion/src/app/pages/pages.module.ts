import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFundacionesComponent } from './docente-tutor/lista-fundaciones/lista-fundaciones.component';
import { ListaEstudiantesComponent } from './docente-tutor/lista-estudiantes/lista-estudiantes.component';
import { PortafolioComponent } from './docente-tutor/portafolio/portafolio.component';
import { AsignarFundacionComponent } from './docente-vinculacion/asignar-fundacion/asignar-fundacion.component';
import { ConfiguracionComponent } from './docente-vinculacion/configuracion/configuracion.component';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PortafolioVinculacionComponent } from './docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { SolicitudVinculacionComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion.component';
import { ProyectoVinculacionComponent } from './docente-vinculacion/proyecto-vinculacion/proyecto-vinculacion.component';


@NgModule({
  declarations: [
    ListaFundacionesComponent,
    ListaEstudiantesComponent,
    PortafolioComponent,
    AsignarFundacionComponent,
    ConfiguracionComponent,
    // PortafolioComponent,
    PortafolioVinculacionComponent,
    SolicitudVinculacionComponent,
    ProyectoVinculacionComponent,
  ],
  exports:[
    AsignarFundacionComponent,
    ConfiguracionComponent,
    PortafolioComponent,
    SolicitudVinculacionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class PagesModule { }
