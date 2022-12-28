import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFundacionesComponent } from './docente-tutor/lista-fundaciones/lista-fundaciones.component';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PortafolioVinculacionComponent } from './docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { SolicitudVinculacionComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion.component';
import { ProyectoVinculacionComponent } from './docente-vinculacion/proyecto-vinculacion/proyecto-vinculacion.component';
import { ConfiguracionVinculacionComponent } from './docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion.component';
import { AsignarFundacionVinculacionComponent } from './docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-vinculacion.component';
import { PortafolioTutorComponent } from './docente-tutor/portafolio-tutor/portafolio-tutor.component';
import { ListaEstudiantesTutorComponent } from './docente-tutor/lista-estudiantes-tutor/lista-estudiantes-tutor.component';


@NgModule({
  declarations: [
    ListaFundacionesComponent,
    AsignarFundacionVinculacionComponent,
    SolicitudVinculacionComponent,
    PortafolioVinculacionComponent,
    ProyectoVinculacionComponent,
    ConfiguracionVinculacionComponent,
    PortafolioTutorComponent,
    ListaEstudiantesTutorComponent,
  ],
  exports:[
    AsignarFundacionVinculacionComponent,
    ConfiguracionVinculacionComponent,
    PortafolioVinculacionComponent,
    PortafolioTutorComponent,
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
