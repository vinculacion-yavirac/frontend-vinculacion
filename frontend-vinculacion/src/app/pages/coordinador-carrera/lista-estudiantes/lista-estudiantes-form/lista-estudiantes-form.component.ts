import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/coordinador-carrera/person';
import { AsignarFundacionVinculacion } from 'src/app/models/docente-vinculacion/asignar-fundacion-vinculacion';
import { VistaListaRoles } from 'src/app/models/vista/vistaListaRoles';
import { ListaEstudiantesHttpService } from 'src/app/service/coordinador-carrera/lista-estudiantes/lista-estudiantes-http.service';
import { AsignarFundacionVinculacionHttpService } from 'src/app/service/docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-vinculacion-http.service';
import { VistaListaRolesHttpService } from 'src/app/service/vista/vistaListaRoles/vista-lista-roles-http.service';

@Component({
  selector: 'app-lista-estudiantes-form',
  templateUrl: './lista-estudiantes-form.component.html',
  styleUrls: ['./lista-estudiantes-form.component.css']
})
export class ListaEstudiantesFormComponent {


 @Input() entityDescription: string = "";
 @Output() termEmitter = new EventEmitter<VistaListaRoles>();
 constructor(
   private listaEstudiantesHttpService:ListaEstudiantesHttpService,
   private activatedRoute: ActivatedRoute,
   private vistaListaRolesHttpService:VistaListaRolesHttpService,

 ){}

pages: number = 1;
asignarList:Persona[] = [];
asignarVista: VistaListaRoles[]=[];



currentEntity: VistaListaRoles = {
  id: 0,
  nombre: '',
  cedula: '',
  telefono: "",
  direccion: "",
  nombreCatalogo: '',
  nombreFundacion: ''
};



 ngOnInit(): void {

  this.findAll();
  this.activatedRoute.paramMap.subscribe(
    (params) => {
      if (params.get("id")){
        this.findById(parseInt(params.get("id")!));
      }
    }
  )
}

 public findAll(): void{
   this.vistaListaRolesHttpService.findAll().subscribe(
     (response) => this.asignarVista = response);

    this.vistaListaRolesHttpService.findAll().subscribe(
      (response) => this.asignarVista = response
    );

 }


 public onInput(term: string) {
   if (term.length >= 1) {
     this.vistaListaRolesHttpService.findByDescription(term).subscribe(
       (response) => this.asignarVista = response
     )
   }
   if (term.length === 0) {
     this.findAll()
   }
 }

 public onSelect(vistaListaRolesHttpService: VistaListaRoles): void {
   this.termEmitter.emit(vistaListaRolesHttpService);

 }

 findById(id: number):void{

  this.vistaListaRolesHttpService.findById(id).subscribe(
    (response) =>{

    this.currentEntity = response;
  }
)
}

}
