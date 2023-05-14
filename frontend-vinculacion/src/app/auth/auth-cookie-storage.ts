import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import { EncryptionHttpService } from '../service/encryption/encryption-http.service';

const COOKIE_STORAGE_TOKEN_REFRESH_KEY = 'refresh_token';

@Injectable({
  providedIn: 'root',
})
export class AuthCookieStorage {
  constructor(
    // private cookieService: CookieService,
    private encryptionHttpService: EncryptionHttpService
  ) {}

  setRefreshToken(token: string): void {
    const encryptedToken = this.encryptionHttpService.encrypt(token);
    // this.cookieService.set(
    //   COOKIE_STORAGE_TOKEN_REFRESH_KEY,
    //   encryptedToken,
    //   1,
    //   '/'
    // );
  }

  getRefreshToken(): string {
    // const encryptedToken = this.cookieService.get(
    //   COOKIE_STORAGE_TOKEN_REFRESH_KEY
    // );
    // if (!encryptedToken) {
    //   return '';
    // }
    // return this.encryptionHttpService.decrypt(encryptedToken);
    return 'hola'
  }

  removeRefreshToken(): void {
    // this.cookieService.delete(COOKIE_STORAGE_TOKEN_REFRESH_KEY, '/');
  }
}