import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certificados } from '../../../models/pestanias/certificados';
import { CertificadosService } from '../../../service/pestanias/certificados/certificados.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  constructor(
    private certificadosService: CertificadosService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Certificados =
  {
    certificadosId: 0,
    solicitudes: "",
    portafolio: ""
  };

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.certificadosService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
        certificadosId: 0,
        solicitudes: "",
        portafolio: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.certificadosService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
