import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/coordinador-carrera/person';
import { PersonaHttpService } from 'src/app/service/persona/persona-http.service';

@Component({
  selector: 'app-agregar-rol-search',
  templateUrl: './agregar-rol-search.component.html',
  styleUrls: ['./agregar-rol-search.component.css']
})
export class AgregarRolSearchComponent {
  @Input() entityDescription: string = "";
  @Output() termEmitter = new EventEmitter<Persona>();
  constructor(
    private agregarRolHttpService:PersonaHttpService,
    private activatedRoute: ActivatedRoute,
    private router:Router

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
    this.agregarRolHttpService.findAll().subscribe(
      (response) => this.agregarList = response);
  }

  // public onInput(term: string){

  //   this.termEmitter.emit(term);
  // }

  public onInput(term: string) {
    if (term.length >= 1) {
      this.agregarRolHttpService.findByName(term).subscribe(
        (response) => this.agregarList = response
      )
    }
    if (term.length === 0) {
      this.findAll()
    }
  }
  public onSelect(agregarRolHttpService: Persona): void {
    this.termEmitter.emit(agregarRolHttpService);

  }

  findById(id: number):void{

   this.agregarRolHttpService.findById(id).subscribe(
     (response) =>{

     this.currentEntity = response;
   }
 )
 }

}
