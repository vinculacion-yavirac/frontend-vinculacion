import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespuestaModel } from 'src/app/models/encuesta/respuesta.model';
import { RespuestaHttpService } from 'src/app/service/encuesta/respuesta-http.service';

@Component({
  selector: 'app-editar-respuesta',
  templateUrl: './editar-respuesta.component.html',
  styleUrls: ['./editar-respuesta.component.css']
})
export class EditarRespuestaComponent implements OnInit{

constructor(private respuestaHttpService: RespuestaHttpService,
  private router: Router,
  private activatedRoute: ActivatedRoute,

) {

}

editEntity: RespuestaModel = {
  id: 0,
  name: '',

};

ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((parametros) => {
    if (parametros.get('id')) {
      this.findById(parseInt(parametros.get('id')!));
    }
  });
}

createRespuesta(): void {
    this.respuestaHttpService.create(this.editEntity).subscribe(() => {
      this.editEntity = {
        id: 0,
        name: '',
      };
      this.router.navigate(['/dashboard/encuesta']);
    })
  }

findById(id: number): void {
  this.respuestaHttpService.findById(id).subscribe(
    (response) => {
      this.editEntity = response;
    }
  )
}
}
