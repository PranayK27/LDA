import { Component } from '@angular/core';
import { BlogService } from '../blog/blog-service.service';
import { ToastService } from '../services/toast-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lda-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  infoPanelVisible = false;

  constructor(public router: Router, public service:BlogService, public toastService: ToastService) {
    this.service.showEdit=false;
  }

  toggleInfoPanel() {
    this.infoPanelVisible = !this.infoPanelVisible;
  }
}
