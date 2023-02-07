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

  
  currentEntity: AsignarFundacionVinculacion = {
    id: 0,
    nombre: '',
    direccion: '',
    encargado: '',
    telefono: '',
    estado: false,
  };

  public findAll(): void{
    this.asignarFundacionVinculacionHttpService.findAll().subscribe(
      (response) => this.asignarList = response
    );
  }

  save(): void {
    console.table(this.currentEntity);
    this.asignarFundacionVinculacionHttpService.save(this.currentEntity).subscribe(
      () => {
        this.currentEntity = {
          id: 0,
          nombre: '',
          direccion: '',
          encargado: '',
          telefono: '',
          estado: false,
        };
        // this.router.navigate(['/layout/holiday-list'])
      }
    )
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
