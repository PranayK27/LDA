import {Component, Input, OnInit, Signal} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { Blog } from '../../../model/blog-type';
import {BlogService} from "../../../services/blog-service.service";
// import {ComponentsModule} from "@lda/taskbox";

@Component({
  standalone: true,
  selector: 'lda-blog-detail',
  imports: [RouterLink],
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
            <!-- TODO: work with library button sinc eit throws binding Index issue -->
<!--            <button-->
<!--              class="btn btn-lg btn-info-gradiant explore"-->
<!--              label="explore"-->
<!--              aria-label="Explore"-->
<!--              (click)="toggleInfoPanel()">-->
<!--              <label>explore</label>-->
<!--            </button>-->
<!--            <button-->
<!--              class="btn btn-lg btn-info-gradiant back"-->
<!--              label="back"-->
<!--              aria-label="Back"-->
<!--              (click)="backToBlog()">-->
<!--              <label>back</label>-->
<!--            </button>-->
            <!-- TODO: remove below if binding index issue is gone-->
            <div class="col-md-6 no-trans">
              <a class="linking font-medium text-themecolor m-t-10 m-r-10 cursor-pointer">
                <span (click)="toggleInfoPanel()">Explore</span>
                <i class="ti-arrow-circle-down"></i>
              </a>
              <a class="linking font-medium text-themecolor m-t-10 m-l-10 cursor-pointer">
                <span (click)="backToBlog()">Back</span>
                <i class="ti-arrow-left"></i>
              </a>
            </div>

            @if (infoPanelVisible){
            <div>
              <span></span>
              <br/>
              <a [href]="detail?.link" target="_blank" class="link"><i class="ti-link"></i>{{ detail?.heading }}</a>
            </div>
            }
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
