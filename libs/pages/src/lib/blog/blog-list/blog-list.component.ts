import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Blog} from "../../model/blog-type";
import {BlogService} from "../blog-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'lda-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  @Input() blogs: Blog[] | null = [];
  @Input() showTechDesc: boolean | null = false;
  @Output() toggleTechDesc= new EventEmitter<void>();

  constructor(
    protected service: BlogService,
    private router: Router,
  ) {}

  viewDetail(id: number) {
    this.router.navigate(['/blogDetail', id]);
  }
}
