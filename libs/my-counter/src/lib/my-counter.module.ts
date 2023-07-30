import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MyCounterComponent} from "./my-counter-comp/my-counter-comp.component";
import {counterReducer} from "./counter.reducer";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [MyCounterComponent],
  exports: [MyCounterComponent],
  imports: [
    AsyncPipe,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: []
})
export class MyCounterModule {}
