import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/app/models/catalogo/Persona';
import { PersonaHttpService } from 'src/app/service/persona/persona-http.service';

@Component({
  selector: 'app-rol-combobox-tutor',
  templateUrl: './rol-combobox-tutor.component.html',
  styleUrls: ['./rol-combobox-tutor.component.css']
})
export class RolComboboxTutorComponent {

  constructor(private rolService: PersonaHttpService) { }

  ngOnInit(): void {
    this.findAll();
  }

  roles: Persona[]=[];
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
