import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PortafolioVinculacionComponent } from './docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { SolicitudVinculacionComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion.component';
import { ProyectoVinculacionComponent } from './docente-vinculacion/proyecto-vinculacion/proyecto-vinculacion.component';
import { ConfiguracionVinculacionComponent } from './docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion.component';
import { AsignarFundacionVinculacionComponent } from './docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-vinculacion.component';
import { PortafolioTutorComponent } from './docente-tutor/portafolio-tutor/portafolio-tutor.component';
import { ListaEstudiantesTutorComponent } from './docente-tutor/lista-estudiantes-tutor/lista-estudiantes-tutor.component';
import { ListaFundacionTutorComponent } from './docente-tutor/lista-fundacion-tutor/lista-fundacion-tutor.component';
import { AgregarRolComponent } from './coordinador-carrera/agregar-rol/agregar-rol.component';
import { RellenarDatosComponent } from './coordinador-carrera/rellenar-datos/rellenar-datos.component';
import { ListaEstudiantesComponent } from './coordinador-carrera/lista-estudiantes/lista-estudiantes.component';
import { ListaPortafoliosComponent } from './coordinador-carrera/lista-portafolios/lista-portafolios.component';
import { RedireccionarComponent } from './coordinador-carrera/redireccionar/redireccionar.component';
import { EstudianteComponent } from './estudiante/estudiante/estudiante.component';
import { EstudiantePortafolioComponent } from './estudiante/estudiante-portafolio/estudiante-portafolio.component';
import { DesboardComponent } from './desboard/desboard.component';
import { PortafolioComponent } from './coordinador-general/portafolio/portafolio.component';
import { SolicitudCertificadoComponent } from './coordinador-general/solicitud-certificado/solicitud-certificado.component';
import { ListaEstudiantesGeneralComponent } from './coordinador-general/lista-estudiantes-general/lista-estudiantes-general.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ListaEstudianteGeneralComponent } from './coordinador-general/lista-estudiante-general/lista-estudiante-general.component';


@NgModule({
  declarations: [
    AsignarFundacionVinculacionComponent,
    SolicitudVinculacionComponent,
    PortafolioVinculacionComponent,
    ProyectoVinculacionComponent,
    ConfiguracionVinculacionComponent,
    PortafolioTutorComponent,
    ListaEstudiantesTutorComponent,
    ListaFundacionTutorComponent,
    AgregarRolComponent,
    ListaEstudiantesComponent,
    ListaPortafoliosComponent,
    RedireccionarComponent,
    RellenarDatosComponent,
    EstudianteComponent,
    EstudiantePortafolioComponent,
    DesboardComponent,
    PortafolioComponent,
    SolicitudCertificadoComponent,
    PagesComponent,
    ListaEstudianteGeneralComponent,


  ],
  exports:[
    AsignarFundacionVinculacionComponent,
    ConfiguracionVinculacionComponent,
    PortafolioVinculacionComponent,
    ProyectoVinculacionComponent,
    SolicitudVinculacionComponent,

    AgregarRolComponent,
    ListaEstudiantesComponent,
    ListaPortafoliosComponent,
    RedireccionarComponent,
    RellenarDatosComponent,


    PortafolioComponent,
    SolicitudCertificadoComponent,

    ListaFundacionTutorComponent,
    ListaEstudiantesTutorComponent,
    PortafolioTutorComponent,

    EstudianteComponent,
    EstudiantePortafolioComponent,
    DesboardComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ]
})
export class PagesModule { }
