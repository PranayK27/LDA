import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {BlogService} from "../blog/blog-service.service";
import {loadTech, techLoadFail, techLoadedSuccess} from "./techUsage.actions";
import {catchError, concatMap, map, of} from "rxjs";

@Injectable()
export class TechUsageEffects {

  constructor(private actions$: Actions, private service: BlogService) {}

  loadTechs$ = createEffect(() =>
    // listens to all actions in our product
    this.actions$.pipe(
      // pass action which you want to filter
      ofType(loadTech),
      // map over the emitted actions and return the result for calling service
      concatMap(() =>
        this.service.getAllBlogs().pipe(
          // map over the result of blog service
          map((data) => techLoadedSuccess({ blogs: data })),
          // catch-error for returning error for blog service returning an error
          catchError(
            (error) => of(techLoadFail({ message: error }))
          )
        )
      ),
    ));

}
