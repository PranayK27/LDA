import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'lda-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  logoutStatus = false;
  routerStatus = "tech/details";

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
}
