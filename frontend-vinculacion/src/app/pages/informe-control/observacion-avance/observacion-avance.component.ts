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

  esvacio1:Boolean=false ;






  ngOnInit(): void {
    this.findAll();
    this.esvacio1=false;
  }




  save():void{


    for(let avance2 of this.observacionA){
       if (avance2.observaciones==''){

        this.esvacio1=true;

       }else{
        this.observacionAvanceHttpService.save(avance2).subscribe()
       }

    }


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
