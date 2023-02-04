import { MessageBundle } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsignarFundacionVinculacion } from 'src/app/models/docente-vinculacion/asignar-fundacion-vinculacion';
import { AsignarFundacionVinculacionHttpService } from 'src/app/service/docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-vinculacion-http.service';

@Component({
  selector: 'app-asignar-fundacion-form',
  templateUrl: './asignar-fundacion-form.component.html',
  styleUrls: ['./asignar-fundacion-form.component.css']
})
export class AsignarFundacionFormComponent {

  @Output() termEmitter = new EventEmitter<AsignarFundacionVinculacion>();
  constructor(
    private asignarFundacionVinculacionHttpService:AsignarFundacionVinculacionHttpService,
    // private asignarT: AsignarFundacionVinculacion,
  ) { }

  pages: number = 1;
  asignarList: AsignarFundacionVinculacion[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.asignarFundacionVinculacionHttpService.findAll().subscribe(
      (response) => this.asignarList = response
    );
  }

  public onInput(term: string) {
    if (term.length >= 1) {
      this.asignarFundacionVinculacionHttpService.findByName(term).subscribe(
        (response) => this.asignarList = response
      )
    }
    if (term.length === 0) {
      this.findAll()
    }
  }
}
