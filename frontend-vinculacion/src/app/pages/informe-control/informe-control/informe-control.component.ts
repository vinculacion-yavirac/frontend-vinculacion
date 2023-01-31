import { Component } from '@angular/core';
import { InformeControl } from 'src/app/models/informe-control/informe-control';
import { InformeControlHttpService } from 'src/app/service/informe-control/informe-control/informe-control-http.service';

@Component({
  selector: 'app-informe-control',
  templateUrl: './informe-control.component.html',
  styleUrls: ['./informe-control.component.css']
})
export class InformeControlComponent {

  constructor(
    private informeControlHttpService:InformeControlHttpService
  ) { }

  informeC:InformeControl[]=[];
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.informeControlHttpService.findAll().subscribe(
      (response) => this.informeC = response
    );
  }

  public findByDescription(term:string): void{
    if(term.length >= 2){
      this.informeControlHttpService.findByDescription(term).subscribe(
        (response) => this.informeC = response
      )
    }
    if(term.length == 0){
      this.findAll();
    }
  }

}
