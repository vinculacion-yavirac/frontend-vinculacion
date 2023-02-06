import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListaFundacionTutor } from 'src/app/models/docente-tutor/lista-fundacion-tutor';
import { ListaFundacionHttpService } from 'src/app/service/docente-tutor/lista-fundacion-tutor/lista-fundacion-http.service';

@Component({
  selector: 'app-lista-fundacion-tutor-from',
  templateUrl: './lista-fundacion-tutor-from.component.html',
  styleUrls: ['./lista-fundacion-tutor-from.component.css']
})
export class ListaFundacionTutorFromComponent {
  @Input() entityDescription: string = "";
  @Output() termEmitter = new EventEmitter<ListaFundacionTutor>();
  constructor(
    private listaFundacionHttpService:ListaFundacionHttpService
  ) { }

  pages: number = 1;
  listaFundacion: ListaFundacionTutor[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.listaFundacionHttpService.findAll().subscribe(
      (response) => this.listaFundacion = response    );
  }

  // public onInput(term: string){

  //   this.termEmitter.emit(term);
  // }

  public onInput(term: string) {
    if (term.length >= 1) {
      this.listaFundacionHttpService.findByDescription(term).subscribe(
        (response) => this.listaFundacion = response
      )
    }
    if (term.length === 0) {
      this.findAll()
    }
  }


  public onSelect(listaFundacion: ListaFundacionTutor): void {
    this.termEmitter.emit(listaFundacion);

  }
}
