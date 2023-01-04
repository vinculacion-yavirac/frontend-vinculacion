import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { SolicitudVinculacionComponent } from './pages/docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion.component';
import { ProyectoVinculacionComponent } from './pages/docente-vinculacion/proyecto-vinculacion/proyecto-vinculacion.component';
import { ConfiguracionVinculacionComponent } from './pages/docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion.component';
import { AsignarFundacionVinculacionComponent } from './pages/docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-vinculacion.component';
import { PortafolioVinculacionComponent } from './pages/docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { RellenarDatosComponent } from './pages/coordinador-carrera/rellenar-datos/rellenar-datos.component';
import { ListaEstudiantesComponent } from './pages/coordinador-carrera/lista-estudiantes/lista-estudiantes.component';
import { ListaPortafoliosComponent } from './pages/coordinador-carrera/lista-portafolios/lista-portafolios.component';
import { AgregarRolComponent } from './pages/coordinador-carrera/agregar-rol/agregar-rol.component';
import { ListaEstudiantesTutorComponent } from './pages/docente-tutor/lista-estudiantes-tutor/lista-estudiantes-tutor.component';
import { ListaFundacionTutorComponent } from './pages/docente-tutor/lista-fundacion-tutor/lista-fundacion-tutor.component';
import { PortafolioTutorComponent } from './pages/docente-tutor/portafolio-tutor/portafolio-tutor.component';
import { RedireccionarComponent } from './pages/coordinador-carrera/redireccionar/redireccionar.component';
import { EstudianteComponent } from './pages/estudiante/estudiante/estudiante.component';
import { EstudiantePortafolioComponent } from './pages/estudiante/estudiante-portafolio/estudiante-portafolio.component';
import { DesboardComponent } from './pages/desboard/desboard.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,

    children: [
      { path: '', redirectTo: '/desboard', pathMatch: 'full' },
      { path: 'desboard', component:DesboardComponent },
    ]
  },
  { path: 'solicitud', component: SolicitudVinculacionComponent },
  { path: 'asignar-fundacion', component: AsignarFundacionVinculacionComponent },
  { path: 'configuraciones', component: ConfiguracionVinculacionComponent},
  { path: 'portafolio-vinculacion', component: PortafolioVinculacionComponent},
  { path: 'proyecto', component: ProyectoVinculacionComponent},


  { path: 'agregar-rol', component: AgregarRolComponent},
  { path: 'lista-estudiantes', component: ListaEstudiantesComponent},
  { path: 'lista-portafolios', component: ListaPortafoliosComponent},
  { path: 'redireccionar', component: RedireccionarComponent},
  { path: 'rellenar-datos', component: RellenarDatosComponent},


  { path: 'lista-fundacion-tutor', component: ListaFundacionTutorComponent},
  { path: 'lista-estudiantes-tutor', component: ListaEstudiantesTutorComponent},
  { path: 'portafolio-tutor', component: PortafolioTutorComponent},

  { path: 'estudiante', component: EstudianteComponent},
  { path: 'estudiante-portafolio', component: EstudiantePortafolioComponent},

  { path: '', redirectTo: '/desboard', pathMatch: 'full' },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
