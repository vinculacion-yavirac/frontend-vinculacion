import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationHttpService {

  private loading = new Subject<boolean>();
  loadingStatus = this.loading.asObservable();
  private success = new Subject<string>();
  successStatus = this.success.asObservable();
  private error = new Subject<string>();
  errorStatus = this.error.asObservable();
  private alert = new Subject<string>();
  alertStatus = this.alert.asObservable();
  private email = new Subject<string>();
  emailStatus = this.email.asObservable();

  constructor() {}

  showLoading() {
    this.loading.next(true);
  }

  hideLoading() {
    this.loading.next(false);
  }

  showSuccess(message: string) {
    this.success.next(message);
  }

  showError(message: string) {
    this.error.next(message);
  }

  showAlert(message: string) {
    this.alert.next(message);
  }

  showEmail(message: string) {
    this.email.next(message);
  }
}
