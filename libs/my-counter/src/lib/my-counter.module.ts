import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MyCounterComponent} from "./my-counter-comp/my-counter-comp.component";
import {counterReducer} from "./counter.reducer";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    MyCounterComponent,
    AsyncPipe,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: []
})
export class MyCounterModule {}
