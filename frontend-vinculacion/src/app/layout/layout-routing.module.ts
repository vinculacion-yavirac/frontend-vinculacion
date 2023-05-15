import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SolicitudListComponent } from '../feature/solicitud/list/solicitud-list.component';
import { UsuarioFormComponent } from '../feature/personal/usuarios/form/usuario.form.component';
import { UsuarioListComponent } from '../feature/personal/usuarios/list/usuario.list.component';
import { UsuarioArchivedComponent } from '../feature/personal/usuarios/archived/usuario.archived.component';
import { RolFormComponent } from '../feature/personal/roles/form/rol.form.component';
import { RolListComponent } from '../feature/personal/roles/list/rol.list.component';
import { RolArchivedComponent } from '../feature/personal/roles/archived/rol.archived.component';
import { ProfileMainComponent } from '../auth/profile/main/profile-main.component';
import { ProfilePersonalDataComponent } from '../auth/profile/general/general.component';
import { SeguridadComponent } from '../auth/profile/seguridad/seguridad.component';

const routes: Routes = [
  // { path: 'upload', component: UploadComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'solicitud', component: SolicitudListComponent },
      // { path: 'asignar-fundacion', component: AsignarFundacionFormComponent },
      // { path: 'configuraciones', component: ConfiguracionVinculacionFormComponent },
      // { path: 'portafolio-vinculacion', component: PortafolioVinculacionFormComponent },
      // { path: 'proyecto', component: ProyectoFormComponent},
      // { path: 'proyecto/:id', component: ProyectoFormComponent},
      // {path:'oficios', component:OficiosFormComponent},
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'oficios-list', component: OficiosListComponent },
      // { path: 'oficios-list/archived', component: OficiosArchivedComponent },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            component: ProfileMainComponent,
            children: [
              { path: '', redirectTo: 'datos-personales', pathMatch: 'full' },
              {
                path: 'datos-personales',
                component: ProfilePersonalDataComponent,
              },

              { path: 'seguridad', component: SeguridadComponent },
            ],
          },
        ],
      },

      {
        path: 'personal',
        children: [
          { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
          {
            path: 'usuarios',
            children: [
              {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
              },
              {
                path: 'form',
                component: UsuarioFormComponent,
              },
              {
                path: 'form/:id',
                component: UsuarioFormComponent,
              },
              {
                path: 'list',
                children: [
                  {
                    path: '',
                    component: UsuarioListComponent,
                  },
                  {
                    path: 'archived',
                    component: UsuarioArchivedComponent,
                  },
                ],
              },
            ],
          },
          {
            path: 'roles',
            children: [
              {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
              },
              {
                path: 'form',
                component: RolFormComponent,
              },
              {
                path: 'form/:id',
                component: RolFormComponent,
              },
              {
                path: 'list',
                children: [
                  {
                    path: '',
                    component: RolListComponent,
                  },
                  {
                    path: 'archived',
                    component: RolArchivedComponent,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
