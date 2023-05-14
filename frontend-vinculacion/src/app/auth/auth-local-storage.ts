import { Injectable } from '@angular/core';
import { EncryptionHttpService } from '../service/encryption/encryption-http.service';


const LOCAL_STORAGE_TOKEN_ACCESS_KEY = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthLocalStorage {
  constructor(private encryptionHttpService: EncryptionHttpService) {}

  setAccessToken(token: string): void {
    const encryptedToken = this.encryptionHttpService.encrypt(token);
    localStorage.setItem(LOCAL_STORAGE_TOKEN_ACCESS_KEY, encryptedToken);
  }

  getAccessToken(): string {
    const encryptedToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_ACCESS_KEY);
    if (!encryptedToken) {
      return '';
    }
    return this.encryptionHttpService.decrypt(encryptedToken);
  }

  removeAccessToken(): void {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_ACCESS_KEY);
  }
}