import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

const routes: Routes= [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)},
  {path: 'shared', loadChildren:() => import('./shared/shared.module').then(m => m.SharedModule)},
  { path: '**', component: NopagesfoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
