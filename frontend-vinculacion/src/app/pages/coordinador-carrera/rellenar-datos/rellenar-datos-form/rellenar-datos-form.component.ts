import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/coordinador-carrera/person';
import { RellenarDatosHttpService } from 'src/app/service/coordinador-carrera/rellenar-datos/rellenar-datos-http.service';

@Component({
  selector: 'app-rellenar-datos-form',
  templateUrl: './rellenar-datos-form.component.html',
  styleUrls: ['./rellenar-datos-form.component.css']
})
export class RellenarDatosFormComponent implements OnInit {

  constructor(
    private rellenarDatosHttpService: RellenarDatosHttpService
    ){}

    currentEntity: Persona =
    {

      id: 0,
      nombre: '',
      cedula: '',
      telefono: '',
      direccion: '',
    }




  ngOnInit(): void {

  }

  save(): void {
    console.table(this.rellenarDatosHttpService)
    this.rellenarDatosHttpService.save(this.currentEntity).subscribe(
      () => {

        this.currentEntity =
        {

          id: 0,
          nombre: '',
          cedula: '',
          telefono: '',
          direccion: '',
        };
      }

     )
    }
}
