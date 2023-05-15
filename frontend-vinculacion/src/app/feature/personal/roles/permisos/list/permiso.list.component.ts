import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Permission } from 'src/app/models/permiso/permiso';
import { PermissionHttpService } from 'src/app/service/permisos/permission-http.service';

@Component({
  selector: 'app-permiso.list',
  templateUrl: './permiso.list.component.html',
  styleUrls: ['./permiso.list.component.css']
})
export class PermisoListComponent implements OnChanges {
  constructor(
    private permissionHttpService: PermissionHttpService,
    ) {}

  loading = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rolId'].currentValue) {
      this.getPermisosByRol(changes['rolId'].currentValue);
    }
  }

  permissions: Permission[] = [];
  // @Input() rolId: number;

  public getPermisosByRol(rolId: number): void {
    this.permissionHttpService.getPermisosByRol(rolId).subscribe((res:any) => {
      if (res.status === 'success') {
        this.permissions = res.data.permissions;
      }
      this.loading = false;
    });
  }
}
