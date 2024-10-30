import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType, OnInitEffects} from "@ngrx/effects";
import {BlogService} from "../services/blog-service.service";
import {
  loadTech,
  techLoadFail,
  techLoadedSuccess,
  sourceLoadedSuccess,
  sourceLoadFail,
  loadSource
} from "./pages.actions";
import {catchError, concatMap, map, of} from "rxjs";

@Injectable()
export class PagesEffects implements OnInitEffects {
  constructor(private actions$: Actions, private service: BlogService) {}

  ngrxOnInitEffects(){
    return loadSource();
  }


  loadSource$ = createEffect(() =>
    // listens to all actions in our product
    this.actions$.pipe(
      // pass action which you want to filter
      ofType(loadSource),
      // map over the emitted actions and return the result for calling service
      concatMap(() =>
        this.service.getAllSources().pipe(
          // map over the result of blog service
          // passing in empty sources since we don't want to reveal the sources of the application in the store
          map(() => sourceLoadedSuccess({ sources: [] })),
          // catch-error for returning error for blog service returning an error
          catchError(
            (error) => of(sourceLoadFail({ message: error }))
          )
        )
      )
    ));

  loadTechs$ = createEffect(() =>
    // listens to all actions in our product
    this.actions$.pipe(
      // pass action which you want to filter
      ofType(loadTech),
      // map over the emitted actions and return the result for calling service
      concatMap(() =>
        this.service.getAllBlogs().pipe(
          // map over the result of blog service
          map((blogs) => techLoadedSuccess({ blogs: blogs })),
          // catch-error for returning error for blog service returning an error
          catchError(
            (error) => of(techLoadFail({ message: error }))
          )
        )
      )
    ));

  // TODO: for future, observes an action when completed then redirect to blog
  // redirectToBlogsPage = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //        techLoadedSuccess
  //       ),
  //       tap(() =>  this.router.navigate(['/tech/blog']))
  //     ),
  //   { dispatch: false }
  // );

}
