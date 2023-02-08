import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaModel } from 'src/app/models/encuesta/pregunta.model';
import { EncuestaHttpService } from 'src/app/service/encuesta/encuesta-http.service';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {
  constructor(private preguntaHttpService:EncuestaHttpService,
    private  router: Router,
    private activatedRoute: ActivatedRoute,

    ) {

   }
   preguntas: PreguntaModel[] = [];


   addpEntity: PreguntaModel = {
    id: 0,
    name: '',

  };

  ngOnInit(): void {



 }

 createPregunta() :void{
  this.preguntaHttpService.create(this.addpEntity).subscribe(()=>
  {
    this.addpEntity={
      id: 0,
      name: '',
    };
    this.router.navigate(['/dashboard/encuesta']);

  })
 }

}
