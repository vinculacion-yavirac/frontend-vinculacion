import { Component, EventEmitter, Output } from '@angular/core';
import { ListaEstudianteTutor } from 'src/app/models/docente-tutor/lista-estudiante-tutor';
import { ListaFundacionTutor } from 'src/app/models/docente-tutor/lista-fundacion-tutor';
import { ListaFundacionHttpService } from 'src/app/service/docente-tutor/lista-fundacion-tutor/lista-fundacion-http.service';

@Component({
  selector: 'app-lista-fundacion-tutor-buscar',
  templateUrl: './lista-fundacion-tutor-buscar.component.html',
  styleUrls: ['./lista-fundacion-tutor-buscar.component.css']
})
export class ListaFundacionTutorBuscarComponent {

  constructor(
    private listaFundacionHttpService : ListaFundacionHttpService
  ){}

  listaFundacion: ListaFundacionTutor[] = []

  @Output() ListaFundacionTutorEmiter = new EventEmitter<ListaFundacionTutor>();

  ngOnInit(): void{

  }

  public onInput(term: string):void{
    if(term.length>=2){
      this.listaFundacionHttpService.findByName(term).subscribe(
        (response) => this.listaFundacion = response
      )
    }
    if (term.length===0){
      this.listaFundacion = [];
    }
  }

  public onSelect(listaFundacion: ListaFundacionTutor):void{
    this.ListaFundacionTutorEmiter.emit(listaFundacion);
  }

}
