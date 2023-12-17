import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';
import { ToastService } from '../blog/toast-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  infoPanelVisible = false;

  constructor(public service:ServiceblogService, public toastService: ToastService) {
    this.service.showEdit=false;
  }

  toggleInfoPanel() {
    this.infoPanelVisible = !this.infoPanelVisible;
  }

  showToast() {
    this.toastService.showInfo('You are on the Same page', 'Apologies!');
    console.log(this.toastService.showInfo('You are on the Same page', 'Apologies!'));
  }
}
