import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFundacionesComponent } from './docente-tutor/lista-fundaciones/lista-fundaciones.component';
import { ListaEstudiantesComponent } from './docente-tutor/lista-estudiantes/lista-estudiantes.component';
import { PortafolioComponent } from './docente-tutor/portafolio/portafolio.component';



@NgModule({
  declarations: [
    ListaFundacionesComponent,
    ListaEstudiantesComponent,
    PortafolioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
