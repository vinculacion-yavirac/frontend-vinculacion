import { Component } from '@angular/core';
import { VistaPortafolioEstudiante } from 'src/app/models/vista/vistaPortafolioEstudiante';
import { VistaPortafolioEstudianteHttpService } from 'src/app/service/vista/vista-portafolio-estudiante/vista-portafolio-estudiante-http.service';

@Component({
  selector: 'app-portafolio-tutor-formulario',
  templateUrl: './portafolio-tutor-formulario.component.html',
  styleUrls: ['./portafolio-tutor-formulario.component.css']
})
export class PortafolioTutorFormularioComponent {
     // @Input () prueba: Catalogo;
     constructor(
       private vistaPortafolioEstudianteHttpService:VistaPortafolioEstudianteHttpService,
     ) { }

     pages: number = 1;
     vistaPortafolioEstudiante: VistaPortafolioEstudiante[]=[];

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
