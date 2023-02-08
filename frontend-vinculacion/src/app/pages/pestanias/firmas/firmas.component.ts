import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firmas } from '../../../models/pestanias/firmas';
import { FirmasService } from '../../../service/pestanias/firmas/firmas.service';

@Component({
  selector: 'app-firmas',
  templateUrl: './firmas.component.html',
  styleUrls: ['./firmas.component.css']
})
export class FirmasComponent implements OnInit {

  constructor(
    private firmasService: FirmasService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Firmas =
  {
    firmasId: 0,
    numero: "",
    cargo: "",
    nombre: "",
    cedula: ""
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
    this.firmasService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          firmasId: 0,
          numero: "",
          cargo: "",
          nombre: "",
          cedula: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.firmasService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
