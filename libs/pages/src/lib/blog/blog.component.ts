import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { BlogService } from './blog-service.service';
import { Sources } from './source-type';
import {Store} from "@ngrx/store";
import {TechState} from "../+state/techUsage.reducer";

@Component({
  selector: 'lda-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  downloadLocation: string | undefined;
  showTechUsage$;

  constructor(
    private service: BlogService,
    private store: Store
  ) {
    this.showTechUsage$ = this.store.select((state: any) => state.blogs.showTechUsage);
    console.log(this.showTechUsage$);
  }

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.blogs = d));
    if (this.service.Sources.length === 0)
      this.service.getSources().subscribe((d: Sources[]) => (this.service.Sources = d));
    this.downloadLocation = this.service.Sources[0].downloadLocation;
  }

  toggleShowTechUsage() {
    this.store.dispatch({ type: '[Tech Usage] Toggle Show Tech Usage' });
  }
}
