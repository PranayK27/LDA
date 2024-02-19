import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast-service.service';
import { Sources } from '../../blog/source-type';
import { ServiceblogService } from '../../blog/blog-service.service';
import {sourcesData} from "../../../../../../apps/lda-e2e/src/mock/sources-data";
import {timeout} from "rxjs";

@Component({
  selector: 'lda-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  sourceData: Sources[] = sourcesData;
  navOptions = false;
  home = sourcesData.map(v=> v.home);
  blog = sourcesData.map(v=> v.blog);
  about = sourcesData.map(v=> v.about);
  login = sourcesData.map(v=> v.login);
  register = sourcesData.map(v=> v.register);
  list = sourcesData.map(v=> v.list);
  currentPage: string;
  public isCollapsed = true;
  constructor(
    protected router: Router,
    private service: ServiceblogService,
    private toastService: ToastService,
    ) {
    this.currentPage = this.router.url;
  }

  ngOnInit() {
    if (this.service.Sources.length === 0)
      this.service.getSources().subscribe((d: Sources) => (this.service.Sources=d));
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
      this.showToast('Login Page');
    }
  }

  sameUrlRegister(){
    if (this.currentPage === this.register[0].replace('/#/', '/')){
      this.showToast('Registration Page');
    }
  }


  showToast(title: string) {
    this.toastService.showWarning('Click to close!', title);
  }

  toggleNavOptions(){
    this.navOptions = !this.navOptions;
  }
}
