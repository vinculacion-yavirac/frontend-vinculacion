import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaModel } from 'src/app/models/encuesta/pregunta.model';
import { EncuestaHttpService } from 'src/app/service/encuesta/encuesta-http.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {



  constructor(private preguntaHttpService: EncuestaHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {

  }



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
  }


  createPregunta(): void {
    this.preguntaHttpService.create(this.currentEntity).subscribe(() => {
      this.currentEntity = {
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






}
