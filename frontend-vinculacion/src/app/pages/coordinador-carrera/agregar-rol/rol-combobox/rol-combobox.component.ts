import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Catalogo } from 'src/app/models/catalogo/Catalogo';
import { AgregarRolHttpService } from 'src/app/service/coordinador-carrera/agregar-rol/agregar-rol-http.service';

@Component({
  selector: 'app-rol-combobox',
  templateUrl: './rol-combobox.component.html',
  styleUrls: ['./rol-combobox.component.css']
})
export class RolComboboxComponent {
  // @Input () prueba: Catalogo;
  constructor(private rolService: AgregarRolHttpService) { }

  ngOnInit(): void {
    this.findAll();
  }

  roles: Catalogo[]=[];
  @Output() rolIdEmiter= new EventEmitter<number>();
  @Input() id: number=0;

  public findAll():void{
    this.rolService.findAll().subscribe(
      (respose) => this.roles = respose
    )
  }

  public onSelect(id:string){
    this.rolIdEmiter.emit(parseInt(id));
  }
}
