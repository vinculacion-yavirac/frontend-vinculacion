import { Component, OnInit } from '@angular/core';
import { RespuestaModel } from 'src/app/models/encuesta/respuesta.model';
import { EncuestaHttpService } from 'src/app/service/encuesta/encuesta-http.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit{
  respuestas: RespuestaModel[] = [];


  constructor(private respuestaHttpService:EncuestaHttpService) {

   }
   ngOnInit(): void {
    this.getRespuestas();
    this.createRespuesta();
    

  }


  getRespuestas() {
    this.respuestaHttpService.getAll().subscribe(
      response => {
        this.respuestas = response;
        console.log(response);
      });
  }
  createRespuesta() {
    const data = {
      name: 'alto impacto',
      preguntaId: 1,
    };
    this.respuestaHttpService.create(data).subscribe(
      response => {
      console.log(response);
    });
  }


  updateRespuesta(id: RespuestaModel['id']) {
    const data = {
      name: 'alto impacto',

    };
    this.respuestaHttpService.update(id, data).subscribe(
      response => {
      console.log(response);
    });
  }
  deleteRespuesta(id: RespuestaModel['id']) {

    this.respuestaHttpService.destroy(id).subscribe(
      response => {
        this.respuestas = this.respuestas.filter(respuesta => respuesta.id != id );
      console.log(response);
    });
  }


}
