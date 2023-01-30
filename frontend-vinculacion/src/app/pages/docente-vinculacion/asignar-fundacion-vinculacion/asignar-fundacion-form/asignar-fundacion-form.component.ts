import { Component } from '@angular/core';
import { AsignarFundacionVinculacion } from 'src/app/models/docente-vinculacion/asignar-fundacion-vinculacion';
import { AsignarFundacionVinculacionHttpService } from 'src/app/service/docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-vinculacion-http.service';

@Component({
  selector: 'app-asignar-fundacion-form',
  templateUrl: './asignar-fundacion-form.component.html',
  styleUrls: ['./asignar-fundacion-form.component.css']
})
export class AsignarFundacionFormComponent {

  
  constructor(
    private asignarFundacionVinculacionHttpService:AsignarFundacionVinculacionHttpService
  ) { }

  asignarList: AsignarFundacionVinculacion[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.asignarFundacionVinculacionHttpService.findAll().subscribe(
      (response) => this.asignarList = response
    );
  }

  public findByDescription(term:string): void{
    if(term.length >= 2){
      this.asignarFundacionVinculacionHttpService.findByDescription(term).subscribe(
        (response) => this.asignarList = response
      )
    }
    if(term.length == 0){
      this.findAll();
    }
  }
}
