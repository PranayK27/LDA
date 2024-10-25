import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../blog-type';
import {BlogService} from "../../blog-service.service";

@Component({
  selector: 'lda-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: any;
  explore = "explore";
  back = "back";
  @Input() detail: Blog | null | undefined;
  infoPanelVisible = false;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly service: BlogService
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
