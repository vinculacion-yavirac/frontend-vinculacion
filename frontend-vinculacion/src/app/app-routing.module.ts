import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes= [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'auth',
    children:[
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      // { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
    ],
  },
  {
         path: 'system',
         loadChildren:() => 
           import('./pages/pages.module').then(m => m.PagesModule),
            //  canActivate: [AuthGuard],
            //   loadChildren: () =>
            //     import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
        path: 'feature',
        loadChildren:() => 
          import('./shared/shared.module').then(m => m.SharedModule),
        // canActivate: [AuthGuard],
        // loadChildren: () =>
        //   import('./feature/feature.module').then((m) => m.FeatureModule),
  },
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
