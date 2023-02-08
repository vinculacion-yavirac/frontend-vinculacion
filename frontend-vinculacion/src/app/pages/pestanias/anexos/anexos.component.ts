import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anexos } from '../../../models/pestanias/anexos';
import { AnexosService } from '../../../service/pestanias/anexos/anexos.service';

@Component({
  selector: 'app-anexos',
  templateUrl: './anexos.component.html',
  styleUrls: ['./anexos.component.css']
})
export class AnexosComponent implements OnInit {

  constructor(
    private anexosService: AnexosService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Anexos =
  {
    anexosId: 0,
    anexose: "",
    anexosi: ""
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
    this.anexosService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          anexosId: 0,
          anexose: "",
          anexosi: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.anexosService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
