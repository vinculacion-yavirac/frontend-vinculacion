import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Catalogo } from 'src/app/models/catalogo/Catalogo';
import { SolicitdVinculacion } from 'src/app/models/docente-vinculacion/solicitud-vinculacion';
import { Vista } from 'src/app/models/vista/vista';
import { SolicitudVinculacionHttpService } from 'src/app/service/docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion-http.service';
import { VistHttpService } from 'src/app/service/vista/vistaSolicitud/vist-http.service';


@Component({
  selector: 'app-solicitud-form',
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.css']
})
export class SolicitudFormComponent {

// @Input () prueba: Catalogo;
 @Output() termEmitter = new EventEmitter<SolicitdVinculacion>();
 constructor(
   private solicitudVinculacionHttpService:SolicitudVinculacionHttpService,
   private vistHttpService:VistHttpService,
 ) { }

 pages: number = 1;
 solicitudList: SolicitdVinculacion[]=[];

 vistaList: Vista[]=[];

 ngOnInit(): void {
   this.findAll();
 }

//  public findAll(): void{
//    this.solicitudVinculacionHttpService.findAll().subscribe(
//      (response) => this.solicitudList = response    );
//  }

public findAll(): void{
  this.vistHttpService.findAll().subscribe(
    (response) => this.vistaList = response );
}

 public onInput(term: string) {
   if (term.length >= 1) {
     this.vistHttpService.findByTipoSolicitud(term).subscribe(
       (response) => this.vistaList = response
     )
   }
   if (term.length === 0) {
     this.findAll()
   }
 }

}
