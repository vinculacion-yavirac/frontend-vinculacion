import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFundacionesComponent } from './docente-tutor/lista-fundaciones/lista-fundaciones.component';
import { ListaEstudiantesComponent } from './docente-tutor/lista-estudiantes/lista-estudiantes.component';
import { PortafolioComponent } from './docente-tutor/portafolio/portafolio.component';
import { AsignarFundacionComponent } from './docente-vinculacion/asignar-fundacion/asignar-fundacion.component';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PortafolioVinculacionComponent } from './docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { SolicitudVinculacionComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion.component';
import { ProyectoVinculacionComponent } from './docente-vinculacion/proyecto-vinculacion/proyecto-vinculacion.component';
import { ConfiguracionVinculacionComponent } from './docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion.component';


@NgModule({
  declarations: [
    ListaFundacionesComponent,
    ListaEstudiantesComponent,
    PortafolioComponent,
    AsignarFundacionComponent,
    PortafolioVinculacionComponent,
    SolicitudVinculacionComponent,
    ProyectoVinculacionComponent,
    ConfiguracionVinculacionComponent,
  ],
  exports:[
    AsignarFundacionComponent,
    ConfiguracionVinculacionComponent,
    PortafolioComponent,
    PortafolioVinculacionComponent,
    ProyectoVinculacionComponent,
    SolicitudVinculacionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class PagesModule { }
