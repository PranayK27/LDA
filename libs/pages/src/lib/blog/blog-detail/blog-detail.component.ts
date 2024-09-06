import {Component, OnInit} from '@angular/core';
import { BlogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog-type';

@Component({
  selector: 'lda-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: any;
  explore = "Explore";
  back = "back";
  detail: Blog | undefined;
  infoPanelVisible = false;

  constructor(activatedRoute: ActivatedRoute,
              private readonly service: BlogService,
              private readonly router: Router
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
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
