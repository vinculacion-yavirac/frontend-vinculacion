import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/coordinador-carrera/person';
import { AgregarRolHttpService } from 'src/app/service/coordinador-carrera/agregar-rol/agregar-rol-http.service';
import { PersonaHttpService } from 'src/app/service/persona/persona-http.service';

@Component({
  selector: 'app-agregar-rol-add',
  templateUrl: './agregar-rol-add.component.html',
  styleUrls: ['./agregar-rol-add.component.css']
})
export class AgregarRolAddComponent {

 @Input() entityDescription: string = "";
 @Output() termEmitter = new EventEmitter<Persona>();
 constructor(
   private personaHttpService:PersonaHttpService,
   private activatedRoute: ActivatedRoute,

 ){}

pages: number = 1;
agregarList: Persona[]=[];


currentEntity: Persona = {

  id: 0,
  nombre: '',
  cedula: '',
  telefono: '',
  direccion: '',
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
   this.personaHttpService.findAll().subscribe(
     (response) => this.agregarList = response);
 }

 // public onInput(term: string){

 //   this.termEmitter.emit(term);
 // }

 public onInput(term: string) {
   if (term.length >= 1) {
     this.personaHttpService.findByName(term).subscribe(
       (response) => this.agregarList = response
     )
   }
   if (term.length === 0) {
     this.findAll()
   }
 }
 public onSelect(personaHttpService: Persona): void {
   this.termEmitter.emit(personaHttpService);

 }

 findById(id: number):void{

  this.personaHttpService.findById(id).subscribe(
    (response) =>{

    this.currentEntity = response;
  }
)
}


/*/deleteById(id: string) {
  const res = confirm('Estas seguro de querer eliminar');
  if (res) {
    this.agregarRolHttpService.deleteById(id).subscribe(
      (res) => {
        this.currentEntity();
      },
      (error) => console.log(error)
    );
  }*/
}

