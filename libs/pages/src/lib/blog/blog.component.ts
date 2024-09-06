import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { BlogService } from './blog-service.service';
import {UntilDestroy} from "@ngneat/until-destroy";
import {describeTechActions, loadTechAction, techLoadedSuccess} from "../+state/techUsage.actions";

@UntilDestroy()
@Component({
  selector: 'lda-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs$ = this.store.select((state: any) => state.pages.blogs);
  download: string | undefined;
  loading$ = this.store.select((state: any) => state.pages.loading);
  showTechDesc$= this.store.select(
    (state: any) => state.pages.showTechDesc
  );
  errorMessage = '';

  constructor(
    private readonly service: BlogService,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  toggleShowTechDesc() {
    this.store.dispatch({ type: describeTechActions.type });
  }

  getBlogs(){
    this.store.dispatch(loadTechAction());
    this.service.getAllBlogs().subscribe({
      next: (blogs) => {
        this.store.dispatch(
          techLoadedSuccess({ blogs })
        );
      },
      error: (error) => (this.errorMessage = error),
    });
  }
}
