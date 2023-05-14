import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthLocalStorage } from './auth-local-storage';
import { AuthCookieStorage } from './auth-cookie-storage';
import { AuthHttpService } from '../service/auth/auth-http.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authHttpService: AuthHttpService,
    private authLocalStorage: AuthLocalStorage,
    private authCookieStorage: AuthCookieStorage
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.addToken(request, this.authLocalStorage.getAccessToken());

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private handle401Error(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authCookieStorage.getRefreshToken();
    return this.authHttpService.refreshAccessToken(token).pipe(
      switchMap((response) => {
        this.authLocalStorage.setAccessToken(response.data.accessToken);
        request = this.addToken(request, response.data.accessToken);
        return next.handle(request);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}