import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastService } from '../../blog/toast-service.service';

@Component({
  selector: 'lda-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  navOptions = false;
  public isCollapsed = true;
  constructor(
    private router: Router,
    private toastService: ToastService
    ) {

  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {
    // this.showToast();
  }

  // showToast() {
  //   this.toastService.showInfo('You are on the Same page', 'Apologies!');
  //   console.log(this.toastService.showInfo('You are on the Same page', 'Apologies!'));
  // }

  toggleNavOptions(){
    this.navOptions = !this.navOptions;
  }
}
