import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../blog/toast-service.service';
import { Sources } from '../../blog/source-type';
import { ServiceblogService } from '../../blog/blog-service.service';

@Component({
  selector: 'lda-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  navOptions = false;
  home = '/tech';
  blog = '/tech/blog';
  about = '/tech/about';
  register = '/tech/register';
  currentPage: string;
  public isCollapsed = true;
  constructor(
    protected router: Router,
    private service: ServiceblogService,
    private toastService: ToastService,
    ) {
    this.currentPage = this.router.url;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {
    if (this.service.Sources.length === 0)
      this.service.getSources().subscribe((d: Sources) => (this.service.Sources=d));
  }

  sameUrlHome(){
    if (this.currentPage === this.home){
      this.showToast('Home Page');
    }
  }

  sameUrlBlog(){
    if (this.currentPage === this.blog){
      this.showToast('Blog Page');
    }
  }
  sameUrlAbout(){
    if (this.currentPage === this.about){
      this.showToast('About Page');
    }
  }

  sameUrlLogin(){
    if (this.currentPage === this.about){
      this.showToast('Login Page');
    }
  }


  showToast(title: string) {
    this.toastService.showWarning('Click to close!', title);
    this.toastService.notificationTimeout();
  }

  toggleNavOptions(){
    this.navOptions = !this.navOptions;
  }
}
