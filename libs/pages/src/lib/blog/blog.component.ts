import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Blog } from './blog-type';
import { BlogService } from './blog-service.service';
import { Sources } from './source-type';
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'lda-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  downloadLocation: string | undefined;
  showTechUsage$= this.store.select(
    (state: any) => state.blogs.showTechUsage
  );
  errorMessage = '';

  constructor(
    private service: BlogService,
    private store: Store
  ) {}

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe({
        next: (blogs) => {
          this.blogs = blogs;
        },
        error: (error) => (this.errorMessage = error),
      });
    if (this.service.Sources.length === 0)
      this.service.getSources().subscribe((d: Sources[]) => (this.service.Sources = d));
    this.downloadLocation = this.service.Sources[0].downloadLocation;
  }

  toggleShowTechUsage() {
    this.store.dispatch({ type: '[Tech Usage] Toggle Show Tech Usage' });
  }
}
