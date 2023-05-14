import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SolicitudListComponent } from '../feature/solicitud/list/solicitud-list.component';

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
      // {
      //   path: 'perfil',
      //   children: [
      //     {
      //       path: '',
      //       component: ProfileMainComponent,
      //       children: [
      //         { path: '', redirectTo: 'datos-personales', pathMatch: 'full' },
      //         {
      //           path: 'datos-personales',
      //           component: ProfilePersonalDataComponent,
      //         },

      //         { path: 'seguridad', component: ProfileSecurityComponent },
      //       ],
      //     },
      //   ],
      // },

      // {
      //   path: 'personal',
      //   children: [
      //     { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
      //     {
      //       path: 'usuarios',
      //       children: [
      //         {
      //           path: '',
      //           redirectTo: 'list',
      //           pathMatch: 'full',
      //         },
      //         {
      //           path: 'form',
      //           component: UsuariosFormComponent,
      //         },
      //         {
      //           path: 'form/:id',
      //           component: UsuariosFormComponent,
      //         },
      //         {
      //           path: 'list',
      //           children: [
      //             {
      //               path: '',
      //               component: UsuariosListComponent,
      //             },
      //             {
      //               path: 'archived',
      //               component: UsuariosArchivedComponent,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       path: 'roles',
      //       children: [
      //         {
      //           path: '',
      //           redirectTo: 'list',
      //           pathMatch: 'full',
      //         },
      //         {
      //           path: 'form',
      //           component: RolesFormComponent,
      //         },
      //         {
      //           path: 'form/:id',
      //           component: RolesFormComponent,
      //         },
      //         {
      //           path: 'list',
      //           children: [
      //             {
      //               path: '',
      //               component: RolesListComponent,
      //             },
      //             {
      //               path: 'archived',
      //               component: RolesArchivedComponent,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
