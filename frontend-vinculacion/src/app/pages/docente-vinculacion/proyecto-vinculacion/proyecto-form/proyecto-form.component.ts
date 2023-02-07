import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoVinculacion } from 'src/app/models/docente-vinculacion/proyecto-vinculacion';
import { PortafolioVinculacionHttpService } from 'src/app/service/docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion-http.service';
import { ProyectoVinculacionHttpService } from 'src/app/service/docente-vinculacion/proyecto-vinculacion/proyecto-vinculacion-http.service';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['./proyecto-form.component.css']
})
export class ProyectoFormComponent {

  @Output() termEmitter = new EventEmitter<ProyectoVinculacion>();
  constructor(
    private proyectoVinculacionHttpService:ProyectoVinculacionHttpService,
    private router:Router,
  ) { }
 
  currentEntity:  ProyectoVinculacion= {
    id:0,
    nombre:"",
    estado:true,
  }

  pages: number = 1;
  proyectoList: ProyectoVinculacion[]=[];
 
  ngOnInit(): void {
    this.findAll();
  }
 

  save(): void {
    console.table(this.currentEntity);
    this.proyectoVinculacionHttpService.save(this.currentEntity).subscribe(
      () => {
        this.currentEntity = {
          id:0,
          nombre:"",
          estado:true,
        };
        this.router.navigate(['/dashboard/proyecto'])
      }
    )
  }

  public findAll(): void{
    this.proyectoVinculacionHttpService.findAll().subscribe(
      (response) => this.proyectoList = response);
  }
 
  public onInput(term: string) {
    if (term.length >= 1) {
      this.proyectoVinculacionHttpService.findByNombre(term).subscribe(
        (response) => this.proyectoList = response
      )
    }
    if (term.length === 0) {
      this.findAll()
    }
  }
}
