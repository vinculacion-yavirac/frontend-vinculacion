import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bibliografia } from '../../../models/pestanias/bibliografia';
import { BibliografiaService } from '../../../service/pestanias/bibliografia/bibliografia.service';

@Component({
  selector: 'app-bibliografia',
  templateUrl: './bibliografia.component.html',
  styleUrls: ['./bibliografia.component.css']
})
export class BibliografiaComponent implements OnInit {

  constructor(
    private bibliografiaService: BibliografiaService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Bibliografia =
  {
    bibliografiaId: 0,
    numEstrategia: "",
    estrategias: "",
    numBibliografia: "",
    bibliografias: ""
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
    this.bibliografiaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          bibliografiaId: 0,
          numEstrategia: "",
          estrategias: "",
          numBibliografia: "",
          bibliografias: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.bibliografiaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
