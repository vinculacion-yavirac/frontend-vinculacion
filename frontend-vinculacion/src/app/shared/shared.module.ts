import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports:[
    HeaderComponent,
  ],
  imports:[
    
  ]
  
})
export class SharedModule { }
