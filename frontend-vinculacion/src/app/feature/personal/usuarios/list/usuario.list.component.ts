import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user';
import { UserHttpService } from 'src/app/service/user/user-http.service';
import { ModalAlertComponent } from 'src/app/shared/material/modal-alert/modal-alert.component';

@Component({
  selector: 'app-usuario.list',
  templateUrl: './usuario.list.component.html',
  styleUrls: ['./usuario.list.component.css']
})
export class UsuarioListComponent implements OnInit {
  reverse = false;

  config = {
    itemsPerPage: 10,
    currentPage: 1,
  };

  usuarios: User[] = [];

  loading: boolean = true;

  constructor(
    private userHttpService: UserHttpService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.loading = true;
    this.userHttpService.getUsuarios().subscribe((res: any) => {
      if (res.status === 'success') {
        this.usuarios = res.data.users;
        //ordenar por nombres
        this.usuarios.sort((a, b) => {
          if (a.person.names.toLowerCase() > b.person.names.toLowerCase()) {
            return 1;
          }
          if (a.person.names.toLowerCase() < b.person.names.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      }
    this.loading = false;

    });
  }

  searchUsuariosByTerm(term: string): void {
    this.loading = true;

    this.userHttpService.searchUsuariosByTerm(term).subscribe((res: any) => {
      if (res.status === 'success') {
        this.usuarios = res.data.users;
        if (term === '') {
          this.getUsuarios();
        }
        this.reverse = false;
      }
    this.loading = false;

    });
  }

  archiveUsuario(usuario: User): void {
    this.userHttpService.archiveUsuario(usuario.id).subscribe((res: any) => {
      if (res.status === 'success') {
        this.getUsuarios();
      }
    });
  }

  openDialogArchiveUsuario(usuario: User): void {
    const dialogRef = this.dialog.open(ModalAlertComponent, {
      height: '320px',
      width: '600px',
      data: {
        title: '¿Está seguro de eliminar el usuario?',
        message: 'El usuario será eliminado y no podrá ser recuperado',
        dato: usuario.email,
        button: 'Eliminar',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.archiveUsuario(usuario);
      }
    });
  }

  reversOrder(): void {
    this.usuarios.reverse();
    this.reverse = !this.reverse;
  }
}
