import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRolComponent } from '../pages/coordinador-carrera/agregar-rol/agregar-rol.component';
import { ListaEstudiantesComponent } from '../pages/coordinador-carrera/lista-estudiantes/lista-estudiantes.component';
import { ListaPortafoliosComponent } from '../pages/coordinador-carrera/lista-portafolios/lista-portafolios.component';
import { RedireccionarComponent } from '../pages/coordinador-carrera/redireccionar/redireccionar.component';
import { RellenarDatosComponent } from '../pages/coordinador-carrera/rellenar-datos/rellenar-datos.component';
import { ListaEstudiantesGeneralComponent } from '../pages/coordinador-general/lista-estudiantes-general/lista-estudiantes-general.component';
import { PortafolioComponent } from '../pages/coordinador-general/portafolio/portafolio.component';
import { SolicitudCertificadoComponent } from '../pages/coordinador-general/solicitud-certificado/solicitud-certificado.component';
import { FormularioFinalTutorComponent } from '../pages/docente-tutor/formulario-final-tutor/formulario-final-tutor.component';
import { ListaEstudiantesTutorComponent } from '../pages/docente-tutor/lista-estudiantes-tutor/lista-estudiantes-tutor.component';
import { ListaFundacionTutorComponent } from '../pages/docente-tutor/lista-fundacion-tutor/lista-fundacion-tutor.component';
import { PortafolioTutorComponent } from '../pages/docente-tutor/portafolio-tutor/portafolio-tutor.component';
import { AsignarFundacionVinculacionComponent } from '../pages/docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-vinculacion.component';
import { ConfiguracionVinculacionComponent } from '../pages/docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion.component';
import { PortafolioVinculacionComponent } from '../pages/docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { ProyectoVinculacionComponent } from '../pages/docente-vinculacion/proyecto-vinculacion/proyecto-vinculacion.component';
import { EncuestaComponent } from '../pages/encuesta/encuesta.component';
import { EstudiantePortafolioComponent } from '../pages/estudiante/estudiante-portafolio/estudiante-portafolio.component';
import { EstudianteComponent } from '../pages/estudiante/estudiante/estudiante.component';
import { InformeFinalEstudianteComponent } from '../pages/estudiante/informe-final-estudiante/informe-final-estudiante.component';
import { AvanceCumplimientoComponent } from '../pages/informe-control/avance-cumplimiento/avance-cumplimiento.component';
import { InformeControlComponent } from '../pages/informe-control/informe-control/informe-control.component';
import { ObservacionAvanceComponent } from '../pages/informe-control/observacion-avance/observacion-avance.component';
import { InformeInicialComponent } from '../pages/informe-inicial/informe-inicial/informe-inicial.component';
import { PrimerFormularioInicialComponent } from '../pages/informe-inicial/primer-formulario-inicial/primer-formulario-inicial.component';
import { SegundoFormularioInicialComponent } from '../pages/informe-inicial/segundo-formulario-inicial/segundo-formulario-inicial.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { SolicitudFormComponent } from '../pages/docente-vinculacion/solicitud-vinculacion/solicitud-form/solicitud-form.component';
import { ActividadesComponent } from '../pages/pestanias/actividades/actividades.component';
import { AnexosComponent } from '../pages/pestanias/anexos/anexos.component';
import { BibliografiaComponent } from '../pages/pestanias/bibliografia/bibliografia.component';
import { CertificadosComponent } from '../pages/pestanias/certificados/certificados.component';
import { DatosGeneralesComponent } from '../pages/pestanias/datos-generales/datos-generales.component';
import { DocumentosComponent } from '../pages/pestanias/documentos/documentos.component';
import { EmpresaComponent } from '../pages/pestanias/empresa/empresa.component';
import { FirmasComponent } from '../pages/pestanias/firmas/firmas.component';
import { IntegrantesComponent } from '../pages/pestanias/integrantes/integrantes.component';
import { ObservacionesComponent } from '../pages/pestanias/observaciones/observaciones.component';
import { PlanDeTrabajoComponent } from '../pages/pestanias/plan-de-trabajo/plan-de-trabajo.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'dashborad', component: DashboardComponent },
      { path: 'solicitud', component: SolicitudFormComponent },
      { path: 'asignar-fundacion', component: AsignarFundacionVinculacionComponent },
      { path: 'configuraciones', component: ConfiguracionVinculacionComponent },
      { path: 'portafolio-vinculacion', component: PortafolioVinculacionComponent },
      { path: 'proyecto', component: ProyectoVinculacionComponent },


      { path: 'agregar-rol', component: AgregarRolComponent },
      { path: 'lista-estudiantes', component: ListaEstudiantesComponent },
      { path: 'lista-portafolios', component: ListaPortafoliosComponent },
      { path: 'redireccionar', component: RedireccionarComponent },
      { path: 'rellenar-datos', component: RellenarDatosComponent },

      { path: 'lista-estudiantes-general', component: ListaEstudiantesGeneralComponent },
      { path: 'portafolio', component: PortafolioComponent },
      { path: 'solicitud-certificado', component: SolicitudCertificadoComponent },

      { path: 'lista-fundacion-tutor', component: ListaFundacionTutorComponent },
      { path: 'lista-estudiante-tutor', component: ListaEstudiantesTutorComponent },
      { path: 'portafolio-tutor', component: PortafolioTutorComponent },

      { path: 'estudiante', component: EstudianteComponent },
      { path: 'estudiante-portafolio', component: EstudiantePortafolioComponent },

      { path: 'avance-cumplimiento', component: AvanceCumplimientoComponent },
      { path: 'informe-control', component: InformeControlComponent },
      { path: 'observacion-avance', component: ObservacionAvanceComponent },

      { path: 'informe-inicial', component: InformeInicialComponent },
      { path: 'primer-formulario-inicial', component: PrimerFormularioInicialComponent },
      { path: 'segundo-formulario-inicial', component: SegundoFormularioInicialComponent },
      { path: 'formulario-final-tutor', component: FormularioFinalTutorComponent },
      { path: 'informe-final-estudiante', component: InformeFinalEstudianteComponent },

      { path: 'actividades', component: ActividadesComponent},
      { path: 'anexos', component: AnexosComponent},
      { path: 'bibliografia', component: BibliografiaComponent},
      { path: 'certificados', component: CertificadosComponent},
      { path: 'datos-generales', component: DatosGeneralesComponent},
      { path: 'documentos', component: DocumentosComponent},
      { path: 'empresa', component: EmpresaComponent},
      { path: 'firmas', component: FirmasComponent},
      { path: 'integrantes', component: IntegrantesComponent},
      { path: 'observaciones', component: ObservacionesComponent},
      { path: 'plan-de-trabajo', component: PlanDeTrabajoComponent},

      { path: 'encuesta', component: EncuestaComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
