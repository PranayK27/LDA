import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog-service.service';
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
  blogDetail: Blog | null = null;
  infoPanelVisible = false;
  respectiveSource = this.blogDetail?.link;

  constructor(activatedRouter: ActivatedRoute,
              public service: ServiceblogService,
              public router: Router
  ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
  }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.service.showEdit=false;
    this.router.navigate([('/post')]);

  }

  editPost() {
    this.service.showEdit=false;
    this.router.navigate([('/editPost'), this.blogDetail?.id]);
  }

  // editPost(){
  //   this.router.navigate([('/editPost'), this.service?.detailId]);

  // }

  toggleInfoPanel() {
    this.infoPanelVisible = !this.infoPanelVisible;
  }

  backToBlog() {
    this.router.navigate(['/tech/blog']);
  }

}
