import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import {UntilDestroy} from "@ngneat/until-destroy";
import {describeTech} from "../+state/techUsage.actions";
import {selectTechBlogs, selectTechDesc, selectTechErrorMessage, selectTechLoading} from "../+state/techUsage.selector";

@UntilDestroy()
@Component({
  selector: 'lda-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  blogs$ = this.store.select(selectTechBlogs);
  download: string | undefined;
  loading$ = this.store.select(selectTechLoading);
  showTechDesc$= this.store.select(selectTechDesc);
  errorMessage$ = this.store.select(selectTechErrorMessage);

  constructor(
    private readonly store: Store
  ) {}

  toggleShowTechDesc() {
    this.store.dispatch(describeTech());
  }
}
