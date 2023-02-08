import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rellenar-datos-select',
  templateUrl: './rellenar-datos-select.component.html',
  styleUrls: ['./rellenar-datos-select.component.css']
})
export class RellenarDatosSelectComponent implements OnInit {

roles = [

  {rol:"rol",nombre:"Estudiante"},
  {rol:"rol",nombre:"Docente"},

];


constructor(){ }



ngOnInit(): void {}


}
