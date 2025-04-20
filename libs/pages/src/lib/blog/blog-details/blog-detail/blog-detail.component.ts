import {Component, Input, OnInit, Signal} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../../model/blog-type';
import {BlogService} from "../../../services/blog-service.service";
import {ComponentsModule} from "@lda/common";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'lda-blog-detail',
  imports: [ComponentsModule, NgIf],
  template: `<div
    class="banner-innerpage"
  >
    <div class="container">
      <!-- Row  -->
      <div class="row justify-content-center">
        <!-- Column -->
        <div class="col-lg-9 col-md-6 align-self-center text-center">
          <h1 class="title">BLOG DETAILS</h1>
          <h5 class="subtitle op-5">
            Just a dev trying to explore the tech on my own.
          </h5>
        </div>
        <!-- Column -->
      </div>
    </div>
  </div>

  <!-- Row  -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 no-trans">
        <div class="mini-spacer">
          <div
            class="d-flex align-items-center text-uppercase m-t-40 font-13 font-medium"
          >
            <a routerLink="" class="link">Pranay</a>
            <div class="ml-auto">
              <a routerLink="" class="link">{{ detail?.blogDate }} </a>
            </div>
          </div>
          <h2 class="title font-light">
            {{ detail?.heading }}
          </h2>
          <p class="m-t-30 m-b-30">
            {{ detail?.subHeading }}
          </p>
          <p class="m-t-30 m-b-30">
            {{ detail?.blogDetail }}
          </p>

          <div class="m-t-30">
            <lda-storybook-button
              [primary]=true
              [label]="explore"
              (click)="toggleInfoPanel()">
            </lda-storybook-button>
            &nbsp;
            <lda-storybook-button
              [icon]="true"
              [primary]=false
              [label]="back"
              (click)="backToBlog()">
            </lda-storybook-button>
            <div *ngIf="infoPanelVisible">
              <span></span>
              <br/>
              <a [href]="detail?.link" target="_blank" class="link"><i class="ti-link"></i>{{ detail?.heading }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Row  -->
  </div>
  `,
  styles: [``]
})
export class BlogDetailComponent implements OnInit {

  id: any;
  explore = "explore";
  back = "back";
  @Input({transform: (value: Signal<Blog | null | undefined>) => value}) detail: Blog | null | undefined;
  infoPanelVisible = false;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly service: BlogService
  ) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetailsById();
  }

  getDetailsById(){
    this.service.getByBlogId(this.id).subscribe({
      next: (blog) => {
        this.detail = blog;
      }
    });
  }

  toggleInfoPanel() {
    this.infoPanelVisible = !this.infoPanelVisible;
  }

  backToBlog() {
    this.router.navigate(['/tech/blog']);
  }

}
