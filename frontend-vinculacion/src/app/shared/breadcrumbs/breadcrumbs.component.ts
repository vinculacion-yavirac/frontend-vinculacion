import { Component } from '@angular/core';
import { SolicitdVinculacion } from 'src/app/models/docente-vinculacion/solicitud-vinculacion';
import { SolicitudVinculacionHttpService } from 'src/app/service/docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion-http.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  constructor(
    private solicitudVinculacionHttpService:SolicitudVinculacionHttpService
  ) { }

  solicitudList: SolicitdVinculacion[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.solicitudVinculacionHttpService.findAll().subscribe(
      (response) => this.solicitudList = response
    );
  }

}
