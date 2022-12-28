import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AsignarFundacionComponent } from './pages/docente-vinculacion/asignar-fundacion/asignar-fundacion.component';
import { ConfiguracionComponent } from './pages/docente-vinculacion/configuracion/configuracion.component';
import { PortafolioComponent } from './pages/docente-tutor/portafolio/portafolio.component';
import { SolicitudVinculacionComponent } from './pages/docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion.component';
import { ProyectoVinculacionComponent } from './pages/docente-vinculacion/proyecto-vinculacion/proyecto-vinculacion.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,

    children: [
      { path: '', redirectTo: '/solicitudes', pathMatch: 'full' },
      { path: 'solicitud', component:SolicitudVinculacionComponent },
    ]
  },
  { path: 'solicitud', component: SolicitudVinculacionComponent },
  { path: 'asignar-fundacion', component: AsignarFundacionComponent },
  { path: 'configuraciones', component: ConfiguracionComponent},
  { path: 'portafolio', component: PortafolioComponent},
  { path: 'proyecto', component: ProyectoVinculacionComponent},
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
