import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actividades } from '../../../models/pestanias/actividades';
import { ActividadesService } from '../../../service/pestanias/actividades/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor(
    private actividadesService: ActividadesService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Actividades =
  {
          actividadesId: 0,
          frecuencia: "",
          sectores: "",
          vinculacion: "",
          ejes: ""
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
    this.actividadesService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          actividadesId: 0,
          frecuencia: "",
          sectores: "",
          vinculacion: "",
          ejes: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.actividadesService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
