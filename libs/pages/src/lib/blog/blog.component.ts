import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { Sources } from './source-type';
import {Store} from "@ngrx/store";

@Component({
  selector: 'lda-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogsDetail: Blog[] = [];
  downloadLocation: string | undefined;
  showTechUsage = false;
  constructor(
    public service: ServiceblogService,
    public router: Router,
    private store: Store
  ) {
    this.service.showEdit = false;
    this.store.subscribe((store) => console.log(store));
  }

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));
    if (this.service.Sources.length === 0)
      this.service.getSources().subscribe((d: Sources[]) => (this.service.Sources=d));
    this.downloadLocation = this.service.Sources[0].downloadLocation;
  }

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) this.service.showEdit = true;

    this.router.navigate(['/blogDetail', id]);
  }

  toggleShowTechUsage() {
    this.showTechUsage = !this.showTechUsage;
  }
}
