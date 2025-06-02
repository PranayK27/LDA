import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.action';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'lda-my-counter',
  templateUrl: './my-counter-comp.component.html',
  styleUrls: [],
  imports: [
    AsyncPipe
  ],
  standalone: true
})

export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
