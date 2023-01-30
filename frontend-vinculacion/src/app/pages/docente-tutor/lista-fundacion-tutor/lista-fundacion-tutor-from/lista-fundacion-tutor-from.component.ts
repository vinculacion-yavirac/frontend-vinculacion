import { Component } from '@angular/core';
import { ListaFundacionTutor } from 'src/app/models/docente-tutor/lista-fundacion-tutor';
import { ListaFundacionHttpService } from 'src/app/service/docente-tutor/lista-fundacion-tutor/lista-fundacion-http.service';

@Component({
  selector: 'app-lista-fundacion-tutor-from',
  templateUrl: './lista-fundacion-tutor-from.component.html',
  styleUrls: ['./lista-fundacion-tutor-from.component.css']
})
export class ListaFundacionTutorFromComponent {

  constructor(
    private listaFundacionHttpService:ListaFundacionHttpService
  ) { }

  listaFundacion: ListaFundacionTutor[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.listaFundacionHttpService.findAll().subscribe(
      (response) => this.listaFundacion = response
    );
  }

  public findByDescription(term:string): void{
    if(term.length >= 2){
      this.listaFundacionHttpService.findByDescription(term).subscribe(
        (response) => this.listaFundacion = response
      )
    }
    if(term.length == 0){
      this.findAll();
    }
  }
}
