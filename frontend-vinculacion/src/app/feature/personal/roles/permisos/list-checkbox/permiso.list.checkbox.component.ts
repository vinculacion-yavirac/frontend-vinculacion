import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Permission } from 'src/app/models/permiso/permiso';
import { PermissionHttpService } from 'src/app/service/permisos/permission-http.service';

@Component({
  selector: 'app-permiso.list.checkbox',
  templateUrl: './permiso.list.checkbox.component.html',
  styleUrls: ['./permiso.list.checkbox.component.css']
})
export class PermisoListCheckboxComponent implements OnInit {
  constructor(
    private permissionHttpService: PermissionHttpService,
    ) {}
  //variable para mostrar el spinner
  loading = true;

  ngOnInit(): void {
    this.getPermisos();
  }

  //emite los permisos seleccionados
  @Output() permissionsEmitter = new EventEmitter<Permission[]>();
  @Input() permissionsSelected: any[] = [];

  permissions: Permission[] = [];

  //función para obtener los permisos
  getPermisos(): void {
    this.permissionHttpService.getPermisos().subscribe((res: any) => {
      if (res.status === 'success') {
        this.permissions = res.data.permissions;
        this.loading = false;
      }
    });
  }

  //función para verificar si el permiso ya esta en la lista, si esta, eliminarlo, si no esta, agregarlo
  PermissionsEmitter(permission: Permission): void {
    let checked = false;
    if (this.permissionsSelected === undefined) {
      this.permissionsSelected = [];
    }

    this.permissionsSelected.forEach((p) => {
      if (p.id === permission.id) {
        checked = true;
      }
    });
    if (checked) {
      this.permissionsSelected = this.permissionsSelected.filter(
        (p) => p.id !== permission.id
      );
    } else {
      this.permissionsSelected.push(permission);
    }
    this.permissionsEmitter.emit(this.permissionsSelected);
  }

  //función para verificar si el permiso ya esta en la lista
  isChecked(permission: Permission): boolean {
    let checked = false;
    if (this.permissionsSelected === undefined) {
      return false;
    }
    this.permissionsSelected.forEach((p) => {
      if (p.id === permission.id) {
        checked = true;
      }
    });
    return checked;
  }
}
