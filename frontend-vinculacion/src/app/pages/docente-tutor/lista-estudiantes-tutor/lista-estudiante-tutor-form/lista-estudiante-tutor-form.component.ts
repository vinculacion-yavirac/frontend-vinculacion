import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from 'src/app/models/coordinador-carrera/person';
import { VistaFundacionEstudiante } from 'src/app/models/vista/vistaFundacionEstudiante';
import { VistaFundacionEstudianteHttpService } from 'src/app/service/vista/vistaFundacionEstudiante/vista-fundacion-estudiante-http.service';

@Component({
  selector: 'app-lista-estudiante-tutor-form',
  templateUrl: './lista-estudiante-tutor-form.component.html',
  styleUrls: ['./lista-estudiante-tutor-form.component.css']
})
export class ListaEstudianteTutorFormComponent {

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
