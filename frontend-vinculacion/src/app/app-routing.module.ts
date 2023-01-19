import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';



const routes: Routes= [
  { path: '', redirectTo: '/pages/solicitud', pathMatch: 'full' },
  {path: 'pages', loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)},
  {path: 'shared', loadChildren:() => import('./shared/shared.module').then(m => m.SharedModule)},
  { path: '**', component: NopagesfoundComponent },
  // { path: '', redirectTo: '/desboard', pathMatch: 'full' },
  // {path: '/dasboard', component:DesboardComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
