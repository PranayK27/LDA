import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private notificationsService: NotificationsService) {}

  showSuccess(message: string, title: string = 'Success') {
    this.notificationsService.success(title, message);
  }

  showError(message: string, title: string = 'Error') {
    this.notificationsService.error(title, message);
  }

  showInfo(message: string, title: string = 'Info') {
    this.notificationsService.info(title, message);
  }

  showWarning(message: string, title: string = 'Warning') {
    this.notificationsService.warn(title, message);
  }
}
