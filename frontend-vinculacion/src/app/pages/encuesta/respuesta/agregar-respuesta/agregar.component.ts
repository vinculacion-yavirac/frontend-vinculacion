import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespuestaModel } from 'src/app/models/encuesta/respuesta.model';
import { RespuestaHttpService } from 'src/app/service/encuesta/respuesta-http.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  constructor(private respuestaHttpService:RespuestaHttpService,
    private  router: Router,
    private activatedRoute: ActivatedRoute,

    ) {

   }

   addEntity: RespuestaModel = {
    id: 0,
    name: '',

  };

  ngOnInit(): void {





}

createRespuesta() :void{
  this.respuestaHttpService.create(this.addEntity).subscribe(()=>
  {
    this.addEntity={
      id: 0,
      name: '',
    };
    this.router.navigate(['/dashboard/encuesta']);

  })
 }

}
