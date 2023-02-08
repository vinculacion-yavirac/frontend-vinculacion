import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaModel } from 'src/app/models/encuesta/pregunta.model';

import { EncuestaHttpService } from 'src/app/service/encuesta/encuesta-http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class  EncuestaComponent implements OnInit{



  constructor(private preguntaHttpService:EncuestaHttpService,
    private  router: Router,
    private activatedRoute: ActivatedRoute,

    ) {

   }

   preguntas: PreguntaModel[] = [];


   currentEntity: PreguntaModel = {
    id: 0,
    name: '',

  };

   ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe((parametros) => {
      if (parametros.get('id')) {
        this.findById(parseInt(parametros.get('id')!));
      }
    });


    this.getpreguntas();
 }



  public getpreguntas() :void{
    this.preguntaHttpService.getAll().subscribe(
      (response) => {
        this.preguntas = response;
        console.log(response);
      });
  }


  

   findById(id: number): void {
    this.preguntaHttpService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById(id: PreguntaModel['id']){
    this.preguntaHttpService.deleteById(id).subscribe(
     response => {
      this.preguntas= this.preguntas.filter((pregunta => pregunta.id != id ));
      console.log(response);

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Pregunta Eliminada Correctamente',
        showConfirmButton: false,
        timer: 3500
      })


     }

    )

   }








}
