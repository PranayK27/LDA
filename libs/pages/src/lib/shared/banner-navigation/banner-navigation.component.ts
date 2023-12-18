import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../blog/toast-service.service';

@Component({
  selector: 'lda-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  navOptions = false;
  currentPage: string;
  public isCollapsed = true;
  constructor(
    protected router: Router,
    private toastService: ToastService,
    ) {
    this.currentPage = this.router.url;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {
  }

  sameUrlNavigation(){
    if (this.currentPage === "/tech/blog"){
      this.showToast();
    } else if (this.currentPage === "/tech/about"){
      this.showToast();
    }
  }

  showToast() {
    this.toastService.showInfo('You are on the Same page', 'Apologies!');
  }

  toggleNavOptions(){
    this.navOptions = !this.navOptions;
  }
}
