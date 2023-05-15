import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { NotificationHttpService } from 'src/app/service/notification/notification-http.service';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  constructor(
    private notificationHttpService: NotificationHttpService,
    private location: Location
  ) {}

  redirectUrl = '/error';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.notificationHttpService.showLoading();

    return next.handle(req).pipe(
      tap(
        (event: any) => {
          if (event.body && event.body.message) {
            if (event.status === 200 || event.status === 201) {
              if (event.body.status === 'email') {
                this.notificationHttpService.showEmail(event.body.message);
                return;
              }
              this.notificationHttpService.showSuccess(event.body.message);
            }
          }
        },
        (error) => {
          if (error.status === 403) {
            this.notificationHttpService.showError(
              'No tienes permisos para realizar esta acción'
            );
            this.location.back();
          } else if (error.status === 0) {
            this.notificationHttpService.showError(
              'Algo inesperado a ocurrido con el servidor'
            );
          } else if (error.error.status === 'alert') {
            this.notificationHttpService.showAlert(error.error.message);
          } else if (error.error.message) {
            this.notificationHttpService.showError(error.error.message);
          }
        }
      ),
      finalize(() => {
        this.notificationHttpService.hideLoading();
      })
    );
  }
}