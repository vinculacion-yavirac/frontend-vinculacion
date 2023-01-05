import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
  ],
  imports:[

  ]

})
export class SharedModule { }
