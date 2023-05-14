import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor() { }

  getUser(){
    
  }
  
  // getUser(): Observable<any> {
  //   // const token = this.authCookieStorage.getRefreshToken();
  //   // if (!this.authValidator.isTokenValid(token)) {
  //   //   return of(null);
  //   // }
  //   // const user = this.authTokenDecoder.decodeToken(token).user;
  //   // return of(user);
  // }
}
