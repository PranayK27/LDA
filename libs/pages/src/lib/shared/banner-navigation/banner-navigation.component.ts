import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast-service.service';
import { Sources } from '../../blog/source-type';
import {BlogService} from '../../blog/blog-service.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {sourcesData} from "../../../../../../apps/lda-e2e/src/mock/sources-data";
import {Store} from "@ngrx/store";

@Component({
  selector: 'lda-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {
  showLoginPage = true;
  showRegPage = true;
  currentPage: string;

  home = sourcesData.map(v=> v.home);
  blog = sourcesData.map(v=> v.blog);
  about = sourcesData.map(v=> v.about);
  // TODO: Work on Login and Registration
  login = sourcesData.map(v=> v.login);
  register = sourcesData.map(v=> v.register);
  list = sourcesData.map(v=> v.list);

  constructor(
    protected router: Router,
    private service: BlogService,
    private toastService: ToastService
    ) {
    this.currentPage = this.router.url;
  }

  ngOnInit() {
    if (this.service.Sources.length === 0)
      this.service.getSources().subscribe((d) => (this.service.Sources = d));
  }

  sameUrlHome(){
    if (this.currentPage === this.home[0].replace('/#/', '/')){
      this.showToast('Home Page');
    }
  }

  sameUrlBlog(){
    if (this.currentPage === this.blog[0].replace('/#/', '/')){
      this.showToast('Blog Page');
    }
  }
  sameUrlAbout(){
    if (this.currentPage === this.about[0].replace('/#/', '/')){
      this.showToast('About Page');
    }
  }

  sameUrlLogin(){
    if (this.currentPage === this.login[0].replace('/#/', '/')){
      this.infoToast('Login Page');
    }
  }

  sameUrlRegister(){
    if (this.currentPage === this.register[0].replace('/#/', '/')){
      this.infoToast('Registration Page');
    }
  }

  showToast(title: string) {
    this.toastService.showSuccess('Click to close!', title);
  }

  infoToast(title: string) {
    this.toastService.showInfo('Still under development!', title);
  }

  toggleShowLoginPage() {
    this.showLoginPage = !this.showLoginPage;
    this.showRegPage = !this.showRegPage;
  }
}
