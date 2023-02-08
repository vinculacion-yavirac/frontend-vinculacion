import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/app/models/coordinador-carrera/person';
import { ListaFundacionTutor } from 'src/app/models/docente-tutor/lista-fundacion-tutor';
import { VistaFundacionEstudiante } from 'src/app/models/vista/vistaFundacionEstudiante';
import { ListaFundacionHttpService } from 'src/app/service/docente-tutor/lista-fundacion-tutor/lista-fundacion-http.service';
import { VistaFundacionEstudianteHttpService } from 'src/app/service/vista/vistaFundacionEstudiante/vista-fundacion-estudiante-http.service';

@Component({
  selector: 'app-lista-fundacion-tutor-from',
  templateUrl: './lista-fundacion-tutor-from.component.html',
  styleUrls: ['./lista-fundacion-tutor-from.component.css']
})
export class ListaFundacionTutorFromComponent {
     // @Input () prueba: Catalogo;
     @Output() termEmitter = new EventEmitter<Persona>();
     constructor(
       private vistaFundacionEstudianteHttpService:VistaFundacionEstudianteHttpService,
     ) { }

     pages: number = 1;
     vistaFundacionEstudiante: VistaFundacionEstudiante []=[];

     ngOnInit(): void {
       this.findAll();
     }

    public findAll(): void{
      this.vistaFundacionEstudianteHttpService.findAll().subscribe(
        (response) => this.vistaFundacionEstudiante = response );
    }

     public onInput(term: string) {
       if (term.length >= 1) {
         this.vistaFundacionEstudianteHttpService.findByTipoSolicitud(term).subscribe(
           (response) => this.vistaFundacionEstudiante = response
         )
       }
       if (term.length === 0) {
         this.findAll()
       }
     }
}
