import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../shared/main/main.component';
import { SolicitudCertificadoComponent } from './coordinador-general/solicitud-certificado/solicitud-certificado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioFinalTutorComponent } from './docente-tutor/formulario-final-tutor/formulario-final-tutor.component';
import { SolicitudFormComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-form/solicitud-form.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { InformeFinalEstudianteComponent } from './estudiante/informe-final-estudiante/informe-final-estudiante.component';
import { AvanceCumplimientoComponent } from './informe-control/avance-cumplimiento/avance-cumplimiento.component';
import { InformeControlComponent } from './informe-control/informe-control/informe-control.component';
import { ObservacionAvanceComponent } from './informe-control/observacion-avance/observacion-avance.component';
import { InformeInicialComponent } from './docente-tutor/informe-inicial/informe-inicial/informe-inicial.component';
import { ProyectoFormComponent } from './docente-vinculacion/proyecto-vinculacion/proyecto-form/proyecto-form.component';
import { AsignarFundacionFormComponent } from './docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-form/asignar-fundacion-form.component';
import { ConfiguracionVinculacionFormComponent } from './docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion-form/configuracion-vinculacion-form.component';
import { PortafolioTutorFormularioComponent } from './docente-tutor/portafolio-tutor/portafolio-tutor-formulario/portafolio-tutor-formulario.component';
import { ListaFundacionTutorFromComponent } from './docente-tutor/lista-fundacion-tutor/lista-fundacion-tutor-from/lista-fundacion-tutor-from.component';
import { ListaEstudianteTutorFormComponent } from './docente-tutor/lista-estudiantes-tutor/lista-estudiante-tutor-form/lista-estudiante-tutor-form.component';
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
import { RedireccionarPrincipalComponent } from './coordinador-carrera/redireccionar/redireccionar-principal/redireccionar-principal.component';
import { AgregarRolAddComponent } from './coordinador-carrera/agregar-rol/agregar-rol-add/agregar-rol-add.component';
import { RellenarDatosFormComponent } from './coordinador-carrera/rellenar-datos/rellenar-datos-form/rellenar-datos-form.component';
import { ListaEstudiantesFormComponent } from './coordinador-carrera/lista-estudiantes/lista-estudiantes-form/lista-estudiantes-form.component';
import { ListaPortafoliosFormComponent } from './coordinador-carrera/lista-portafolios/lista-portafolios-form/lista-portafolios-form.component';
import { ListaEstudiantesGeneralFormComponent } from './coordinador-general/lista-estudiantes-general/lista-estudiantes-general-form/lista-estudiantes-general-form.component';
import { PortafolioVinculacionFormComponent } from './docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion-form/portafolio-vinculacion-form.component';
import { FormularioInformeInicialComponent } from './docente-tutor/informe-inicial/formulario-informe-inicial/formulario-informe-inicial.component';
import { EstudiantePortafolioFormularioComponent } from './estudiante/estudiante-portafolio/estudiante-portafolio-formulario/estudiante-portafolio-formulario.component';
import { EstudianteFormularioComponent } from './estudiante/estudiante/estudiante-formulario/estudiante-formulario.component';
import { PortafolioFormComponent } from './coordinador-general/portafolio/portafolio-form/portafolio-form.component';
import { EditarComponent } from './encuesta/editar/editar.component';
import { RespuestaComponent } from './encuesta/respuesta/respuesta.component';
import { AgregarComponent } from './encuesta/respuesta/agregar-respuesta/agregar.component';
const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'solicitud', component: SolicitudFormComponent},
      { path: 'asignar-fundacion', component: AsignarFundacionFormComponent },
      { path: 'configuraciones', component: ConfiguracionVinculacionFormComponent },
      { path: 'portafolio-vinculacion', component: PortafolioVinculacionFormComponent },
      { path: 'proyecto', component: ProyectoFormComponent},
      { path: 'proyecto/:id', component: ProyectoFormComponent},


      { path: 'agregar-rol', component: AgregarRolAddComponent },
      { path: 'lista-estudiantes', component: ListaEstudiantesFormComponent},
      { path: 'rellenar-datos/:id', component:RellenarDatosFormComponent},
      { path: 'agregar-rol/:id', component:RellenarDatosFormComponent},
      { path: 'lista-portafolios', component: ListaPortafoliosFormComponent },
      { path: 'redireccionar', component: RedireccionarPrincipalComponent },
      { path: 'rellenar-datos', component: RellenarDatosFormComponent },

      { path: 'lista-estudiantes-general', component: ListaEstudiantesGeneralFormComponent },
      { path: 'portafolio', component: PortafolioFormComponent },
      { path: 'solicitud-certificado', component: SolicitudCertificadoComponent },

      { path: 'portafolio-tutor', component: PortafolioTutorFormularioComponent },
      { path: 'lista-fundacion-tutor', component: ListaFundacionTutorFromComponent },
      { path: 'lista-estudiante-tutor', component: ListaEstudianteTutorFormComponent },


      { path: 'estudiante', component: EstudianteFormularioComponent },
      { path: 'estudiante-portafolio', component: EstudiantePortafolioFormularioComponent },


      { path: 'avance-cumplimiento', component: AvanceCumplimientoComponent },
      { path: 'informe-control', component: InformeControlComponent },
      { path: 'observacion-avance', component: ObservacionAvanceComponent },

      { path: 'informe-inicial', component: InformeInicialComponent },
      { path: 'formulario-informe-inicial', component: FormularioInformeInicialComponent },
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
      { path: 'encuesta', component: EncuestaComponent},
      { path: 'editar/:id', component: EditarComponent},
      { path: 'respuesta', component: RespuestaComponent},
      { path: 'agregar-respuesta', component: AgregarComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
