import { Component } from '@angular/core';
import { ObservacionAvance } from 'src/app/models/informe-control/observacion-avance';
import { ObservacionAvanceHttpService } from 'src/app/service/informe-control/observacion-avance/observacion-avance-http.service';

@Component({
  selector: 'app-observacion-avance',
  templateUrl: './observacion-avance.component.html',
  styleUrls: ['./observacion-avance.component.css']
})
export class ObservacionAvanceComponent {

  constructor(
    private observacionAvanceHttpService:ObservacionAvanceHttpService
  ) { }

  observacionA: ObservacionAvance[]=[];
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.observacionAvanceHttpService.findAll().subscribe(
      (response) => this.observacionA = response
    );
  }

  public findByDescription(term:string): void{
    if(term.length >= 2){
      this.observacionAvanceHttpService.findByDescription(term).subscribe(
        (response) => this.observacionA = response
      )
    }
    if(term.length == 0){
      this.findAll();
    }
  }


}
