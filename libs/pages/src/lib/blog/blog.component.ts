import {Component, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";
import {UntilDestroy} from "@ngneat/until-destroy";
import {describeTech, loadTech} from "../+state/pages.actions";
import {selectTechDesc, selectTechErrorMessage, selectTechLoading} from "../+state/pages.selector";
import {PagesStore} from "../pages.store";
import {AsyncPipe, NgIf} from "@angular/common";
import {Page404Component} from "../page404/page404.component";
import {BlogListComponent} from "./blog-list/blog-list.component";

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'lda-blog',
  imports: [NgIf, AsyncPipe, Page404Component, BlogListComponent],
  template: `
    <div *ngIf="!loading() && errorMessage() === ''">
      <div
        class="static-slider-head"
      >
        <div class="container layout_padding">
          <!-- Row  -->
          <div class="row justify-content-center">
            <!-- Column -->
            <div class="col-lg-9 col-md-6 align-self-center text-center">
              <h2 class="title">Tech Stack</h2>
              <h5 class="subtitle op-5">
                If you are keen enough please feel free to click onto Tech below and find out when and where I used them
              </h5>

              <a
                [href]="download"
                class="btn btn-info-gradiant"
                target="_blank"
              >Download Free</a
              >
            </div>
            <!-- Column -->
          </div>
        </div>
      </div>

      <!-- Row  -->
      <div class="container">
        <div class="row justify-content-center">
          <!-- Column -->
          <div class="col-md-8 no-trans text-center">
            <h2 class="title">Recent Blogs</h2>
            <h6 class="subtitle">
              You can rely on our amazing features list and also our customer
              services will be great experience for you without doubt and in no-time
            </h6>
          </div>
          <!-- Column -->
        </div>
        <div class="row m-t-40 justify-content-center">
          <lda-blog-list
            class="col-md-8 no-trans text-center"
            [blogs]="blogs()"
            [showTechDesc]="showTechDesc"
            (toggleTechDesc)="toggleShowTechDesc()">
          </lda-blog-list>
        </div>
      </div>
    </div>

    <!-- Error Message -->
    <div *ngIf="loading() && errorMessage()">
      <lda-page404></lda-page404>
    </div>
  `,
  styles: [`.title{
    font-size: 40px;
  }`],
  providers: [PagesStore]
})
export class BlogComponent implements OnInit {
  // from generic store selector
  // blogs$ = this.store.select(selectTechBlogs);
  // from component store
  blogs = this.pagesStore.blogs;
  download: string | undefined;
  loading = this.store.selectSignal(selectTechLoading);
  showTechDesc= this.store.selectSignal(selectTechDesc);
  errorMessage = this.store.selectSignal(selectTechErrorMessage);

  constructor(
    private readonly store: Store,
    private readonly pagesStore: PagesStore,
  ) {}

  ngOnInit(){
    this.store.dispatch(loadTech());
    // from component store
    this.pagesStore.getBlogs();
  }

  toggleShowTechDesc() {
    this.store.dispatch(describeTech());
  }
}
