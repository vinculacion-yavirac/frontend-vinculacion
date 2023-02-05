import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SolicitdVinculacion } from 'src/app/models/docente-vinculacion/solicitud-vinculacion';
import { SolicitudVinculacionHttpService } from 'src/app/service/docente-vinculacion/solicitud-vinculacion/solicitud-vinculacion-http.service';

@Component({
  selector: 'app-solicitud-form',
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.css']
})
export class SolicitudFormComponent {

 @Output() termEmitter = new EventEmitter<SolicitdVinculacion>();
 constructor(
   private solicitudVinculacionHttpService:SolicitudVinculacionHttpService
 ) { }

 pages: number = 1;
 solicitudList: SolicitdVinculacion[]=[];

 ngOnInit(): void {
   this.findAll();
 }

 public findAll(): void{
   this.solicitudVinculacionHttpService.findAll().subscribe(
     (response) => this.solicitudList = response    );
 }

 public onInput(term: string) {
   if (term.length >= 1) {
     this.solicitudVinculacionHttpService.findByTipoSolicitud(term).subscribe(
       (response) => this.solicitudList = response
     )
   }
   if (term.length === 0) {
     this.findAll()
   }
 }

}
