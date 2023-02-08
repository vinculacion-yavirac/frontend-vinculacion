import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/coordinador-carrera/person';
import { AsignarFundacionVinculacion } from 'src/app/models/docente-vinculacion/asignar-fundacion-vinculacion';
import { ListaEstudiantesHttpService } from 'src/app/service/coordinador-carrera/lista-estudiantes/lista-estudiantes-http.service';
import { AsignarFundacionVinculacionHttpService } from 'src/app/service/docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-vinculacion-http.service';

@Component({
  selector: 'app-lista-estudiantes-form',
  templateUrl: './lista-estudiantes-form.component.html',
  styleUrls: ['./lista-estudiantes-form.component.css']
})
export class ListaEstudiantesFormComponent {


 @Input() entityDescription: string = "";
 @Output() termEmitter = new EventEmitter<Persona>();
 constructor(
   private listaEstudiantesHttpService:ListaEstudiantesHttpService,
   private activatedRoute: ActivatedRoute,
   private asignarFundacionVinculacionHttpService:AsignarFundacionVinculacionHttpService,

 ){}

pages: number = 1;
listaEstudiantes: Persona[]=[];
asignarList: AsignarFundacionVinculacion[]=[];



currentEntity: Persona = {

  id: 0,
  nombre: '',
  cedula: '',
  telefono: '',
  direccion: '',
};

currentEntity2: AsignarFundacionVinculacion = {
  id: 0,
  nombre: '',
  direccion: '',
  encargado: '',
  telefono: '',
  estado: false,
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
   this.listaEstudiantesHttpService.findAll().subscribe(
     (response) => this.listaEstudiantes = response);

    this.asignarFundacionVinculacionHttpService.findAll().subscribe(
      (response) => this.asignarList = response
    );

 }

 // public onInput(term: string){

 //   this.termEmitter.emit(term);
 // }

 public onInput(term: string) {
   if (term.length >= 1) {
     this.listaEstudiantesHttpService.findByDescription(term).subscribe(
       (response) => this.listaEstudiantes = response
     )
   }
   if (term.length === 0) {
     this.findAll()
   }
 }

 public onSelect(listaEstudiantesHttpService: Persona): void {
   this.termEmitter.emit(listaEstudiantesHttpService);

 }

 findById(id: number):void{

  this.listaEstudiantesHttpService.findById(id).subscribe(
    (response) =>{

    this.currentEntity = response;
  }
)
}

public onInput2(term: string) {
  if (term.length >= 1) {
    this.asignarFundacionVinculacionHttpService.findByName(term).subscribe(
      (response) => this.asignarList = response
    )
  }
  if (term.length === 0) {
    this.findAll()
  }
}
}
