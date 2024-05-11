import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {blogs} from '../../../../../apps/lda-e2e/src/mock/blog-data';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {sourcesData} from '../../../../../apps/lda-e2e/src/mock/sources-data';
import {Blog} from "./blog-type";
import {Sources} from "./source-type";


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  Blogs: Blog[] = [];
  Sources: Sources[] = [];

  detailId = -1;
  showEdit = false;

  public getBlog(): Observable<Blog[]> {
    return of(blogs);
  }

  public getBlogById(id: number): Blog {
    return blogs.filter(x => x.id == +id)[0];
  }

  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

  public getSources(): Observable<Sources[]> {
    return of(sourcesData);
  }

}
