import { Component, EventEmitter, Output } from '@angular/core';
import { ProyectoVinculacion } from 'src/app/models/docente-vinculacion/proyecto-vinculacion';
import { PortafolioVinculacionHttpService } from 'src/app/service/docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion-http.service';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['./proyecto-form.component.css']
})
export class ProyectoFormComponent {

  @Output() termEmitter = new EventEmitter<ProyectoVinculacion>();
  constructor(
    private portafolioVinculacionHttpService:PortafolioVinculacionHttpService
  ) { }
 
  pages: number = 1;
  solicitudList: ProyectoVinculacion[]=[];
 
  ngOnInit(): void {
    this.findAll();
  }
 
  public findAll(): void{
    this.portafolioVinculacionHttpService.findAll().subscribe(
      (response) => this.solicitudList = response);
  }
 
  public onInput(term: string) {
    if (term.length >= 1) {
      this.portafolioVinculacionHttpService.findByNombre(term).subscribe(
        (response) => this.solicitudList = response
      )
    }
    if (term.length === 0) {
      this.findAll()
    }
  }
}
