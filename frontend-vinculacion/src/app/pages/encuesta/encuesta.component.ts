import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaModel } from 'src/app/models/encuesta/pregunta.model';

import { EncuestaHttpService } from 'src/app/service/encuesta/encuesta-http.service';

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


   createPregunta() :void{
    this.preguntaHttpService.create(this.currentEntity).subscribe(()=>
    {
      this.currentEntity={
        id: 0,
        name: '',
      };
      this.router.navigate(['/dashboard/encuesta']);

    })
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
     }
    )
    //this.router.navigate(['/dashboard/encuesta']);
    //console.log("hola")
   }








}
