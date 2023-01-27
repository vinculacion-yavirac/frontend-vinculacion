import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../shared/main/main.component';
import { ListaEstudiantesComponent } from './coordinador-carrera/lista-estudiantes/lista-estudiantes.component';
import { ListaPortafoliosComponent } from './coordinador-carrera/lista-portafolios/lista-portafolios.component';
import { RellenarDatosComponent } from './coordinador-carrera/rellenar-datos/rellenar-datos.component';
import { ListaEstudiantesGeneralComponent } from './coordinador-general/lista-estudiantes-general/lista-estudiantes-general.component';
import { PortafolioComponent } from './coordinador-general/portafolio/portafolio.component';
import { SolicitudCertificadoComponent } from './coordinador-general/solicitud-certificado/solicitud-certificado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioFinalTutorComponent } from './docente-tutor/formulario-final-tutor/formulario-final-tutor.component';
import { PortafolioVinculacionComponent } from './docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { SolicitudFormComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-form/solicitud-form.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { EstudiantePortafolioComponent } from './estudiante/estudiante-portafolio/estudiante-portafolio.component';
import { EstudianteComponent } from './estudiante/estudiante/estudiante.component';
import { InformeFinalEstudianteComponent } from './estudiante/informe-final-estudiante/informe-final-estudiante.component';
import { AvanceCumplimientoComponent } from './informe-control/avance-cumplimiento/avance-cumplimiento.component';
import { InformeControlComponent } from './informe-control/informe-control/informe-control.component';
import { ObservacionAvanceComponent } from './informe-control/observacion-avance/observacion-avance.component';
import { InformeInicialComponent } from './informe-inicial/informe-inicial/informe-inicial.component';
import { PrimerFormularioInicialComponent } from './informe-inicial/primer-formulario-inicial/primer-formulario-inicial.component';
import { SegundoFormularioInicialComponent } from './informe-inicial/segundo-formulario-inicial/segundo-formulario-inicial.component';
import { ProyectoFormComponent } from './docente-vinculacion/proyecto-vinculacion/proyecto-form/proyecto-form.component';
import { AsignarFundacionFormComponent } from './docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-form/asignar-fundacion-form.component';
import { ConfiguracionVinculacionFormComponent } from './docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion-form/configuracion-vinculacion-form.component';
import { PortafolioTutorFormularioComponent } from './docente-tutor/portafolio-tutor/portafolio-tutor-formulario/portafolio-tutor-formulario.component';
import { ListaFundacionTutorFromComponent } from './docente-tutor/lista-fundacion-tutor/lista-fundacion-tutor-from/lista-fundacion-tutor-from.component';
import { ListaEstudianteTutorFormComponent } from './docente-tutor/lista-estudiantes-tutor/lista-estudiante-tutor-form/lista-estudiante-tutor-form.component';
import { RedireccionarPrincipalComponent } from './coordinador-carrera/redireccionar/redireccionar-principal/redireccionar-principal.component';
import { AgregarRolAddComponent } from './coordinador-carrera/agregar-rol/agregar-rol-add/agregar-rol-add.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'solicitud', component: SolicitudFormComponent },
      { path: 'asignar-fundacion', component: AsignarFundacionFormComponent },
      { path: 'configuraciones', component: ConfiguracionVinculacionFormComponent },
      { path: 'portafolio-vinculacion', component: PortafolioVinculacionComponent },
      { path: 'proyecto', component: ProyectoFormComponent},


      { path: 'agregar-rol', component: AgregarRolAddComponent },
      { path: 'lista-estudiantes', component: ListaEstudiantesComponent },
      { path: 'lista-portafolios', component: ListaPortafoliosComponent },
      { path: 'redireccionar', component: RedireccionarPrincipalComponent },
      { path: 'rellenar-datos', component: RellenarDatosComponent },

      { path: 'lista-estudiantes-general', component: ListaEstudiantesGeneralComponent },
      { path: 'portafolio', component: PortafolioComponent },
      { path: 'solicitud-certificado', component: SolicitudCertificadoComponent },

      { path: 'portafolio-tutor', component: PortafolioTutorFormularioComponent },
      { path: 'lista-fundacion-tutor', component: ListaFundacionTutorFromComponent },
      { path: 'lista-estudiante-tutor', component: ListaEstudianteTutorFormComponent },



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

      { path: 'encuesta', component: EncuestaComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
