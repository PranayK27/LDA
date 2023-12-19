import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Notification } from 'angular2-notifications/lib/interfaces/notification.type';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  notification: Notification | undefined;

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

  notificationTimeout(){
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.notification.timeOut = 1000;
  }
}
