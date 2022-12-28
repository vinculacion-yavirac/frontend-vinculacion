import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFundacionesComponent } from './docente-tutor/lista-fundaciones/lista-fundaciones.component';
import { ListaEstudiantesComponent } from './docente-tutor/lista-estudiantes/lista-estudiantes.component';
import { PortafolioComponent } from './docente-tutor/portafolio/portafolio.component';
import { AsignarFundacionComponent } from './docente-vinculacion/asignar-fundacion/asignar-fundacion.component';
import { ConfiguracionComponent } from './docente-vinculacion/configuracion/configuracion.component';
import { ProyectoComponent } from './docente-vinculacion/proyecto/proyecto.component';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PortafolioVinculacionComponent } from './docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { SolicitudVinculacionComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion.component';


@NgModule({
  declarations: [
    ListaFundacionesComponent,
    ListaEstudiantesComponent,
    PortafolioComponent,
    AsignarFundacionComponent,
    ConfiguracionComponent,
    // PortafolioComponent,
    ProyectoComponent,
    PortafolioVinculacionComponent,
    SolicitudVinculacionComponent,
  ],
  exports:[
    AsignarFundacionComponent,
    ConfiguracionComponent,
    PortafolioComponent,
    ProyectoComponent,
    SolicitudVinculacionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class PagesModule { }
