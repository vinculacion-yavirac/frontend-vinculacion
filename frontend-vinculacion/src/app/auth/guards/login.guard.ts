import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs';
import { AuthHttpService } from 'src/app/service/auth/auth-http.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private  authHttpService:  AuthHttpService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isNotAuthenticated();
  }

  isNotAuthenticated(): boolean {
    if (this. authHttpService.isAuthenticated()) {
      this.router.navigate(['/system'], {
        queryParams: { returnUrl: '/system' },
      });
      return false;
    } else {
      return true;
    }
  }
}