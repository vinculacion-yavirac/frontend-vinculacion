import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenDecoder {
  private jwtHelper = new JwtHelperService();

  constructor() {}

  decodeToken(token: string): any {
    if (token) {
      try {
        if (!this.jwtHelper.isTokenExpired(token)) {
          return this.jwtHelper.decodeToken(token);
        } else {
          console.error('Token expirado');
          return null;
        }
      } catch (err) {
        console.error(err);
        return null;
      }
    } else {
      return null;
    }
  }
}