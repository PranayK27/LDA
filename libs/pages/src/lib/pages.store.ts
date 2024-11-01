import {Injectable} from "@angular/core";
import {ComponentStore} from "@ngrx/component-store";
import {exhaustMap, tap} from "rxjs";
import {Blog} from "./model/blog-type";
import {Sources} from "./model/source-type";
import {BlogService} from "./services/blog-service.service";

interface CombinedState {
  blogs: Blog[];
  sources: Sources[];
}

@Injectable()
export class PagesStore extends ComponentStore<CombinedState>{

  blogs= this.selectSignal((state) => state.blogs)
  sources$= this.select((state) => state.sources);

  constructor(private service: BlogService) {
    super({ blogs: [], sources: [] });
  }

  addBlogs = this.updater((state, blogs: Blog[]) => ({
    ...state,
    blogs,
  }));

  addSources = this.updater((state, sources: Sources[]) => ({
    ...state,
    sources,
  }));

  getBlogs = this.effect((trigger$) =>
    trigger$.pipe(
      exhaustMap(() =>
        this.service.getAllBlogs().pipe(tap({ next: this.addBlogs }))
      )
    )
  );

  getSources = this.effect((trigger$) =>
    trigger$.pipe(
      exhaustMap(() =>
        this.service.getAllSources().pipe(tap({ next: this.addSources }))
      )
    )
  );

}
