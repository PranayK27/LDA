import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog-type';
import {Store} from "@ngrx/store";
import {selectTechBlogById} from "../../+state/techUsage.selector";
import {BlogService} from "../blog-service.service";

@Component({
  selector: 'lda-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: any;
  explore = "Explore";
  back = "back";
  @Input() detail: Blog | undefined;
  infoPanelVisible = false;
  // TODO: make use of below
  details$ = this.store.select(selectTechBlogById);

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly service: BlogService,
              private readonly store: Store
  ) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetailsById();
  }

  getDetailsById(){
    this.service.getByBlogId(this.id).subscribe({
      next: (blog) => {
        this.detail = blog;
      }
    });
  }

  toggleInfoPanel() {
    this.infoPanelVisible = !this.infoPanelVisible;
  }

  backToBlog() {
    this.router.navigate(['/tech/blog']);
  }

}
