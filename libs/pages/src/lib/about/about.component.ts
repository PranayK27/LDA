import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';
import { ToastService } from '../services/toast-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infoPanelVisible = false;

  constructor(public router: Router, public service:ServiceblogService, public toastService: ToastService) {
    this.service.showEdit=false;
  }

  ngOnInit(): void {
  }

  toggleInfoPanel() {
    this.infoPanelVisible = !this.infoPanelVisible;
  }
}
