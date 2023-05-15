import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudListComponent } from './solicitud/list/solicitud-list.component';
import { PersonalBreadcrumbsComponent } from './personal/header/breadcrumbs/personal.breadcrumbs.component';
import { PersonalTabsComponent } from './personal/header/tabs/personal.tabs.component';
import { RolArchivedComponent } from './personal/roles/archived/rol.archived.component';
import { RolBreadcrumbsComponent } from './personal/roles/breadcrumbs/rol.breadcrumbs.component';
import { RolComboboxComponent } from './personal/roles/combobox/rol.combobox.component';
import { RolFormComponent } from './personal/roles/form/rol.form.component';
import { RolListComponent } from './personal/roles/list/rol.list.component';
import { PermisoListCheckboxComponent } from './personal/roles/permisos/list-checkbox/permiso.list.checkbox.component';
import { PermisoListComponent } from './personal/roles/permisos/list/permiso.list.component';
import { UsuarioArchivedComponent } from './personal/usuarios/archived/usuario.archived.component';
import { UsuarioBreadcrumbsComponent } from './personal/usuarios/breadcrumbs/usuario.breadcrumbs.component';
import { UsuarioFormComponent } from './personal/usuarios/form/usuario.form.component';
import { UsuarioListComponent } from './personal/usuarios/list/usuario.list.component';
import { AgePipe } from '../shared/pipes/age.pipe';
import { TimeAgoPipe } from '../shared/pipes/time-ago.pipe';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { NameInitialsPipe } from '../shared/pipes/name-initials.pipe';
import { FullNameShortPipe } from '../shared/pipes/full-name-short.pipe';
import { FullNameFirstMiddlePipe } from '../shared/pipes/full-name-first-middle.pipe';
import { NamesSurnamesCompletePipe } from '../shared/pipes/names-surnames-complete.pipe';
import { HasPermissionsDirective } from '../auth/has-permission.directive';
import { ModuleHeaderComponent } from '../shared/header/header.component';
import { SpinnerComponent } from '../shared/loader/spinner/spinner.component';
import { NoContentComponent } from '../shared/no-content/no-content.component';
import { ProfileBreadcrumbsComponent } from '../auth/profile/breadcrumbs/breadcrumbs.component';
import { ProfilePersonalDataComponent } from '../auth/profile/general/general.component';
import { IdentificationTypesComboboxComponent } from '../shared/comboboxes/tipos-identificacion/tipos-identificacion.combobox.component';
import { GendersComboboxComponent } from '../shared/comboboxes/generos/genders-combobox.component';
import { MaterialModule } from '../shared/material/material.module';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { ProfileMainComponent } from '../auth/profile/main/profile-main.component';
import { ProfileSidebarComponent } from '../auth/profile/sidebar/profile-sidebar.component';
import { SeguridadComponent } from '../auth/profile/seguridad/seguridad.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    SolicitudListComponent,
    PersonalBreadcrumbsComponent,
    PersonalTabsComponent,
    
    AgePipe,
    TimeAgoPipe,
    CapitalizePipe,
    NameInitialsPipe,
    FullNameShortPipe,
    FullNameFirstMiddlePipe,
    NamesSurnamesCompletePipe,
    HasPermissionsDirective,
    ModuleHeaderComponent,
    SpinnerComponent,
    NoContentComponent,

    ProfileMainComponent,
    ProfileSidebarComponent,
    ProfileBreadcrumbsComponent,
    SeguridadComponent,
    ProfilePersonalDataComponent,

    UsuarioArchivedComponent,
    UsuarioBreadcrumbsComponent,
    UsuarioFormComponent,
    UsuarioListComponent,

    RolArchivedComponent,
    RolBreadcrumbsComponent,
    RolComboboxComponent,
    RolFormComponent,
    RolListComponent,

    PermisoListCheckboxComponent,
    PermisoListComponent,

    IdentificationTypesComboboxComponent,
    GendersComboboxComponent,
    //ProvincesComboboxComponent,
    //CantonsComboboxComponent,
    //ParishesComboboxComponent,
    PaginationComponent

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
    
  ],
  exports: [
    AgePipe,
    TimeAgoPipe,
    CapitalizePipe,
    SpinnerComponent,
    NameInitialsPipe,
    FullNameShortPipe,
    NoContentComponent,
    NgxPaginationModule,
    //PaginationComponent,
    FullNameFirstMiddlePipe,
    HasPermissionsDirective,
  ],
})
export class FeatureModule { }
