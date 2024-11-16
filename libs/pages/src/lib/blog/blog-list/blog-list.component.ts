import {Component, EventEmitter, Input, Output, Signal} from '@angular/core';
import {Blog} from "../../model/blog-type";
import {BlogService} from "../../services/blog-service.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'lda-blog-list',
  imports: [NgIf],
  template: `<div>
    <input
      id="showTechUsage"
      type="checkbox"
      (change)="toggleTechDesc.emit()"
      [checked]="showTechDesc"
    />
    <label style="padding-left: 10px" for="showTechUsage">Show Tech Description</label>
  </div>
  <div class="row justify-content-center">
    <!-- Column -->
    <div
      class="col-md-12 no-trans border-bottom mb-4 justify-content-center"
    >
      @for (bl of blogs; track bl.id) {
      <div class="card" data-aos="flip-left" data-aos-duration="1200">
        <div class="row">
          <div class="col-md-2 no-trans">
            <span class="text-dark font-medium">{{ bl.blogDate }}</span>
            <h6 class="card-subtitle font-12 mt-1">By Pranay Kekre</h6>
          </div>
          <div class="col-md-7 no-trans">
            <h5 class="font-medium cursor-pointer" (click)="viewDetail(bl.id)">
              {{ bl.heading.substring(0, 50) }}..
            </h5>
            <p class="m-t-20" *ngIf="showTechDesc">
              {{ bl.subHeading }}
            </p>
          </div>
          <div class="col-md-3 no-trans">
            <a class="linking font-medium text-themecolor m-t-10 cursor-pointer">
              <span (click)="viewDetail(bl.id)">Show Detail</span>
              <i class="ti-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      }
    </div>
  </div>
  `,
  styles: [``]
})
export class BlogListComponent {
  @Input() blogs: Blog[] = [];
  @Input() showTechDesc: boolean | null = false;
  @Output() toggleTechDesc= new EventEmitter<void>();

  constructor(
    protected service: BlogService,
    private router: Router,
  ) {}

  viewDetail(id: number) {
    this.router.navigate(['/blogDetail', id]);
  }
}
