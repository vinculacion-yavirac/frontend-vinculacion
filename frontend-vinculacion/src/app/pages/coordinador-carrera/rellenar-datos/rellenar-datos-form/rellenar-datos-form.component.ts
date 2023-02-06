import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/coordinador-carrera/person';
import { RellenarDatosHttpService } from 'src/app/service/coordinador-carrera/rellenar-datos/rellenar-datos-http.service';

@Component({
  selector: 'app-rellenar-datos-form',
  templateUrl: './rellenar-datos-form.component.html',
  styleUrls: ['./rellenar-datos-form.component.css']
})
export class RellenarDatosFormComponent implements OnInit {

  constructor(
    private rellenarDatosHttpService: RellenarDatosHttpService,
    private activatedRoute: ActivatedRoute,
    private router:Router
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
      this.activatedRoute.paramMap.subscribe(
        (params) => {
          if (params.get("id")){
            this.findById(parseInt(params.get("id")!));
          }
        }
      )
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
        this.router.navigate(['/dashboard/agregar-rol']);
      }
     )
    }

    findById(id: number):void{


      this.rellenarDatosHttpService.findById(id).subscribe(
        (response) =>{

        this.currentEntity = response;
      }
)
    }

    }
