import { Component } from '@angular/core';
import { VistaPortafolioEstudiante } from 'src/app/models/vista/vistaPortafolioEstudiante';
import { VistaPortafolioEstudianteHttpService } from 'src/app/service/vista/vista-portafolio-estudiante/vista-portafolio-estudiante-http.service';

@Component({
  selector: 'app-portafolio-tutor-estudiante',
  templateUrl: './portafolio-tutor-estudiante.component.html',
  styleUrls: ['./portafolio-tutor-estudiante.component.css']
})
export class PortafolioTutorEstudianteComponent {

  constructor(
    private vistaPortafolioEstudianteHttpService:VistaPortafolioEstudianteHttpService,
  ) { }

  pages: number = 1;
  vistaPortafolioEstudiante: VistaPortafolioEstudiante []=[];

  ngOnInit(): void {
    this.findAll();
  }

 public findAll(): void{
   this.vistaPortafolioEstudianteHttpService.findAll().subscribe(
     (response) => this.vistaPortafolioEstudiante = response );
 }

  public onInput(term: string) {
    if (term.length >= 1) {
      this.vistaPortafolioEstudianteHttpService.findByTipoSolicitud(term).subscribe(
        (response) => this.vistaPortafolioEstudiante = response
      )
    }
    if (term.length === 0) {
      this.findAll()
    }
  }

}
