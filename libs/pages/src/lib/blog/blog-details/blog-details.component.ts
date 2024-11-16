import { Component } from '@angular/core';
import {selectTechBlogById, selectTechLoading} from "../../+state/pages.selector";
import {Store} from "@ngrx/store";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'lda-blog-details',
  imports: [BlogDetailComponent, NgIf],
  template: `
    @if (!loading()){
      <lda-blog-detail
        [detail]="details"
      ></lda-blog-detail>
    } @else {
      <ng-template #loadingElement>Loading...</ng-template>\`
    }`,
  styles: [``],
})
export class BlogDetailsComponent {
  details= this.store.selectSignal(selectTechBlogById);
  loading= this.store.selectSignal(selectTechLoading);

  constructor(private readonly store: Store) {}
}
