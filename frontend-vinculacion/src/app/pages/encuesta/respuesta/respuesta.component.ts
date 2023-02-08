import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespuestaModel } from 'src/app/models/encuesta/respuesta.model';
import { RespuestaHttpService } from 'src/app/service/encuesta/respuesta-http.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit{
  constructor(private respuestaHttpService:RespuestaHttpService,
    private  router: Router,
    private activatedRoute: ActivatedRoute,

    ) {

   }

   respuestas: RespuestaModel[] = [];


   currentEntity: RespuestaModel = {
     id: 0,
     name: '',

   };

   ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe((parametros) => {
      if (parametros.get('id')) {
        this.findById(parseInt(parametros.get('id')!));
      }
    });
    this.getrespuestas();

}

public getrespuestas() :void{
  this.respuestaHttpService.getAll().subscribe(
    (response) => {
      this.respuestas = response;
      console.log(response);
    });
}

findById(id: number): void {
  this.respuestaHttpService.findById(id).subscribe(
    (response) => {
      this.currentEntity = response;
    }
  )
}

}
