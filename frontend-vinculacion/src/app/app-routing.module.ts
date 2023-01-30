import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes= [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'dashboard', loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)},
  {path: 'shared', loadChildren:() => import('./shared/shared.module').then(m => m.SharedModule)},
  {path: 'login', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: '**', component: NopagesfoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
