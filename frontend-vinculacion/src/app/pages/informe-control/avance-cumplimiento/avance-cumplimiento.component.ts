import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AvanceCumplimiento } from 'src/app/models/informe-control/avance-cumplimiento';
import { AvanceCumplimientoHttpService } from 'src/app/service/informe-control/avance-cumplimiento/avance-cumplimiento-http.service';

@Component({
  selector: 'app-avance-cumplimiento',
  templateUrl: './avance-cumplimiento.component.html',
  styleUrls: ['./avance-cumplimiento.component.css']
})
export class AvanceCumplimientoComponent {
  constructor(
    private avanceCumplimientoHttpService:AvanceCumplimientoHttpService
  ) { }

currentEntity:AvanceCumplimiento=
{
    id:0,
    avanceC:"",
    resumenN:"",
    indicadoresF:"",
    mediosF:""

};






  avanceC: AvanceCumplimiento[]=[];


  esvacio:Boolean=false ;


  ngOnInit(): void {
    this.findAll();
    this.esvacio=false;

  }





  save():void{


    for(let avance1 of this.avanceC){
       if (avance1.avanceC==''){

        this.esvacio=true;
        
       }else{
        this.avanceCumplimientoHttpService.save(avance1).subscribe()
       }

    }
    }




  public findAll(): void{
    this.avanceCumplimientoHttpService.findAll().subscribe(
      (response) => this.avanceC = response
    );
  }

  public findByDescription(term:string): void{
    if(term.length >= 2){
      this.avanceCumplimientoHttpService.findByDescription(term).subscribe(
        (response) => this.avanceC = response
      )
    }
    if(term.length == 0){
      this.findAll();
    }
  }


}
