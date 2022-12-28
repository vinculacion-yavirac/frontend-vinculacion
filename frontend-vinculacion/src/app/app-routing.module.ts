import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { SolicitudVinculacionComponent } from './pages/docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion.component';
import { ProyectoVinculacionComponent } from './pages/docente-vinculacion/proyecto-vinculacion/proyecto-vinculacion.component';
import { ConfiguracionVinculacionComponent } from './pages/docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion.component';
import { AsignarFundacionVinculacionComponent } from './pages/docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-vinculacion.component';
import { PortafolioVinculacionComponent } from './pages/docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { ListaEstudiantesTutorComponent } from './pages/docente-tutor/lista-estudiantes-tutor/lista-estudiantes-tutor.component';
import { ListaFundacionTutorComponent } from './pages/docente-tutor/lista-fundacion-tutor/lista-fundacion-tutor.component';
import { PortafolioTutorComponent } from './pages/docente-tutor/portafolio-tutor/portafolio-tutor.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,

    children: [
      { path: '', redirectTo: '/solicitudes', pathMatch: 'full' },
      { path: 'solicitud', component:SolicitudVinculacionComponent },
    ]
  },
  { path: 'solicitud', component: SolicitudVinculacionComponent },
  { path: 'asignar-fundacion', component: AsignarFundacionVinculacionComponent },
  { path: 'configuraciones', component: ConfiguracionVinculacionComponent},
  { path: 'portafolio-vinculacion', component: PortafolioVinculacionComponent},
  { path: 'proyecto', component: ProyectoVinculacionComponent},

  { path: 'lista-fundacion-tutor', component: ListaFundacionTutorComponent},
  { path: 'lista-estudiantes-tutor', component: ListaEstudiantesTutorComponent},
  { path: 'portafolio-tutor', component: PortafolioTutorComponent},
  // // {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  // { path: '**', component: NopagesfoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
