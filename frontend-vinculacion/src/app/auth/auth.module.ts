import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports:[
    LoginComponent,

  ]
})
export class AuthModule { }
