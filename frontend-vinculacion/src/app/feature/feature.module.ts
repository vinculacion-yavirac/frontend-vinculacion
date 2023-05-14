import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
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



@NgModule({
  declarations: [
    SolicitudListComponent,
    PersonalBreadcrumbsComponent,
    PersonalTabsComponent,
    RolArchivedComponent,
    RolBreadcrumbsComponent,
    RolComboboxComponent,
    RolFormComponent,
    RolListComponent,
    PermisoListCheckboxComponent,
    PermisoListComponent,
    UsuarioArchivedComponent,
    UsuarioBreadcrumbsComponent,
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MaterialModule,
    NgxPaginationModule,
  ],
  exports: [
    // AgePipe,
    // TimeAgoPipe,
    // CapitalizePipe,
    // SpinnerComponent,
    // NameInitialsPipe,
    // FullNameShortPipe,
    // NoContentComponent,
    NgxPaginationModule,
    // PaginationComponent,
    // FullNameFirstMiddlePipe,
    // HasPermissionsDirective,
  ],
})
export class FeatureModule { }
