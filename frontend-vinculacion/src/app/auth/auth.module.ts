import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    LoginComponent,

  ]
})
export class AuthModule { }
