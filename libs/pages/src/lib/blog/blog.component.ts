import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { BlogService } from './blog-service.service';
import {UntilDestroy} from "@ngneat/until-destroy";
import {describeTechActions, loadTechAction, sourceLoadedSuccess, techLoadedSuccess} from "../+state/techUsage.actions";

@UntilDestroy()
@Component({
  selector: 'lda-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs$ = this.store.select((state: any) => state.pages.blogs);
  downloadLocation: string | undefined;
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
    this.getSources();
    this.downloadLocation = this.service.Sources[0].downloadLocation;
  }

  toggleShowTechDesc() {
    this.store.dispatch({ type: describeTechActions.type });
  }

  getBlogs(){
    this.store.dispatch(loadTechAction());
    // TODO 1: Replaced the getBlog() with getAllBlogs(), remove getBlog from blog-service.service.ts
    this.service.getAllBlogs().subscribe({
      next: (blogs) => {
        this.store.dispatch(
          techLoadedSuccess({ blogs })
        );
      },
      error: (error) => (this.errorMessage = error),
    });
  }

  getSources(){
    // TODO 2: Replaced the getSources() with getAllSources(), remove getSources from blog-service.service.ts
    this.service.getAllSources().subscribe({
      next: (sources) => {
        this.store.dispatch(sourceLoadedSuccess({ sources }))
      },
      error: (error) => (this.errorMessage = error),
    });
  }
}
