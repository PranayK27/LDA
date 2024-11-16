import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast-service.service';
import {sourcesData} from "../../data/sources-data";
import {Store} from "@ngrx/store";
import {SimpleNotificationsModule} from "angular2-notifications";

@Component({
  standalone: true,
  selector: 'lda-banner-navigation',
  imports: [
    SimpleNotificationsModule
  ],
  template: `
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href=# (click)="sameUrlHome()">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [href]=blog (click)="sameUrlBlog()">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [href]=about (click)="sameUrlAbout()">About</a>
            </li>
            @if (!showLoginPage && !showRegPage){
            <li class="nav-item">
              <a class="nav-link" [href]=login (click)="sameUrlLogin()">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [href]=register (click)="sameUrlRegister()">Register</a>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
    <simple-notifications></simple-notifications>

  `,
  styles: [`
    .navbar{
      display: flex;
    }
    .navbar-expand-sm{
      float: right;
      flex-wrap: nowrap;
      justify-content: flex-start;
      flex-flow: row nowrap;
    }


    /*@media (max-width: 430px) {*/
    /*  .navbar .navbar-expand-sm {*/
    /*    flex-direction: column;*/
    /*    text-align: center;*/
    /*  }*/
    /*}*/

    /*@media (max-width: 376px) {*/
    /*  .navbar .navbar-expand-sm {*/
    /*    min-height: auto;*/
    /*  }*/
    /*}*/

  `]
})
export class BannerNavigationComponent {
  showLoginPage = true;
  showRegPage = true;
  currentPage: string;

  home = sourcesData.map(v=> v.home);
  blog = sourcesData.map(v=> v.blog);
  about = sourcesData.map(v=> v.about);
  // TODO for new Feature: Work on Login and Registration
  login = sourcesData.map(v=> v.login);
  register = sourcesData.map(v=> v.register);
  list = sourcesData.map(v=> v.list);
  private errorMessage: '' | undefined;

  constructor(
    protected router: Router,
    private toastService: ToastService,
    private readonly store: Store
    ) {
    this.currentPage = this.router.url;
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
}
