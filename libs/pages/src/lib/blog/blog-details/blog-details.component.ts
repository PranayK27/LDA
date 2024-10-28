import { Component } from '@angular/core';
import {selectTechBlogById, selectTechLoading} from "../../+state/pages.selector";
import {Store} from "@ngrx/store";

@Component({
  selector: 'lda-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {
  details$ = this.store.select(selectTechBlogById);
  loading$ = this.store.select(selectTechLoading);

  constructor(private readonly store: Store) {}
}
