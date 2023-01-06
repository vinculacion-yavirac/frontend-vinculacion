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
import { ActividadesComponent } from './pestanias/actividades/actividades.component';
import { AnexosComponent } from './pestanias/anexos/anexos.component';
import { BibliografiaComponent } from './pestanias/bibliografia/bibliografia.component';
import { CertificadosComponent } from './pestanias/certificados/certificados.component';
import { DatosGeneralesComponent } from './pestanias/datos-generales/datos-generales.component';
import { DocumentosComponent } from './pestanias/documentos/documentos.component';
import { EmpresaComponent } from './pestanias/empresa/empresa.component';
import { FirmasComponent } from './pestanias/firmas/firmas.component';
import { IntegrantesComponent } from './pestanias/integrantes/integrantes.component';
import { ObservacionesComponent } from './pestanias/observaciones/observaciones.component';
import { PlanDeTrabajoComponent } from './pestanias/plan-de-trabajo/plan-de-trabajo.component';


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
    ListaEstudiantesGeneralComponent,
    ActividadesComponent,
    AnexosComponent,
    BibliografiaComponent,
    CertificadosComponent,
    DatosGeneralesComponent,
    DocumentosComponent,
    EmpresaComponent,
    FirmasComponent,
    IntegrantesComponent,
    ObservacionesComponent,
    PlanDeTrabajoComponent,


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
    ListaEstudiantesGeneralComponent,

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
