import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'lda-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  navOptions = false;
  public isCollapsed = true;
  routerStatus = "tech/details";

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  toggleNavOptions(){
    this.navOptions = !this.navOptions;
  }
  protected screenX = screenX;
}
