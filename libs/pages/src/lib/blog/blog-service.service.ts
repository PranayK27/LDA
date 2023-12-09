import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { blogs } from '../../../../../apps/lda-e2e/src/mock/blog-data';


@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  Blogs: any[] = [];
  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;


  constructor() {
  }

  public getBlog(): Observable<any> {
    return of(blogs);
  }

  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

}
