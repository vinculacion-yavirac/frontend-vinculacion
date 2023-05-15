import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Role } from 'src/app/models/role/rol';
import { RolHttpService } from 'src/app/service/roles/rol-http.service';
import { ModalAlertComponent } from 'src/app/shared/material/modal-alert/modal-alert.component';

@Component({
  selector: 'app-rol.archived',
  templateUrl: './rol.archived.component.html',
  styleUrls: ['./rol.archived.component.css']
})
export class RolArchivedComponent implements OnInit {
    config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
  
    rolesArchived: Role[] = [];
  
    //loading
    loading: boolean = true;
  
    constructor(private rolHttpService: RolHttpService, private dialog: MatDialog) {}
  
    ngOnInit(): void {
      this.getRolesArchived();
    }
  
    /*
     *Nota:Este método recupera roles archivados de un servicio y actualiza el estado del componente.
     *"If": el estado de la respuesta es correcto, actualice el estado rolesArchived del componente con los
      datos devueltos
     */
    public getRolesArchived(): void {
      this.loading = true;
      this.rolHttpService.getRolesArchived().subscribe((res: any) => {
        if (res.status == 'success') {
          this.rolesArchived = res.data.roles;
        }
        this.loading = false;
      });
    }
    /*
     *Nota:Este método se encarga de buscar roles archivados por término de búsqueda.
     *"If": el estado de la respuesta es correcto, actualice el estado rolesArchived del componente con los
      datos devueltos
  }**
     */
    public searchRolesArchivedByTerm(term: string): void {
      this.loading = true;
      this.rolHttpService.searchRolesArchivedByTerm(term).subscribe((res: any) => {
        if (res.status == 'success') {
          this.rolesArchived = res.data.roles;
        }
  
        if (term === '') {
          this.getRolesArchived();
        }
  
        this.loading = false;
      });
    }
    /*
     *Nota:Si la petición es exitosa y el estado devuelto es "success", se llama a otro método llamado
             getRolesArchived para obtener la lista de roles archivados actualizada.
          *Es importante destacar que la suscripción se realiza de forma asíncrona, lo que significa que no
             se bloqueará la ejecución de la aplicación mientras se espera la respuesta del servidor.
     */
  
    public restoreRol(rol: Role): void {
      this.rolHttpService.restoreRol(rol.id).subscribe((res: any) => {
        if (res.status == 'success') {
          this.getRolesArchived();
        }
      });
    }
    /*
     *Nota:implementa un método llamado "openDialogDeleteRol" que recibe como parámetro un objeto de tipo
          "Rol" y en resumen, este fragmento de código implementa una funcionalidad para eliminar un rol
           de la base de datos, mostrando una alerta de confirmación al usuario antes de realizar la
           acción.
     */
    public openDialogDeleteRol(rol: Role): void {
      const dialogRef = this.dialog.open(ModalAlertComponent, {
        height: '350px',
        width: '700px',
        data: {
          title: '¿Está seguro de eliminar definitivamente el rol?',
          message:
            'El rol será eliminado definitivamente de la base de datos y no podrá ser recuperado nunca más.',
          dato: rol.name,
          button: 'Eliminar definitivamente',
        },
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.deleteRol(rol);
        }
      });
    }
    /*
     *Nota:El parámetro que recibe la función es un objeto de tipo Role
     */
    public deleteRol(rol: Role): void {
      this.rolHttpService.deleteRol(rol.id).subscribe((res: any) => {
        if (res.status == 'success') {
          this.getRolesArchived();
        }
      });
    }
}
