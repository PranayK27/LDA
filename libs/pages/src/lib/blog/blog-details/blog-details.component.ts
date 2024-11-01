import { Component } from '@angular/core';
import {selectTechBlogById, selectTechLoading} from "../../+state/pages.selector";
import {Store} from "@ngrx/store";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'lda-blog-details',
  imports: [BlogDetailComponent, NgIf],
  template: `<div *ngIf="!loading(); else loadingElement">
    <lda-blog-detail
      [detail]="details"
    ></lda-blog-detail>
  </div>

  <ng-template #loadingElement>Loading...</ng-template>`,
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {
  details= this.store.selectSignal(selectTechBlogById);
  loading= this.store.selectSignal(selectTechLoading);

  constructor(private readonly store: Store) {}
}
