import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Documentos } from '../../../models/pestanias/documentos';
import { DocumentosService } from '../../../service/pestanias/documentos/documentos.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  constructor(
    private documentosService: DocumentosService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Documentos =
  {
          documentosId: 0,
          documentosA: ""
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
    this.documentosService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          documentosId: 0,
          documentosA: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.documentosService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
