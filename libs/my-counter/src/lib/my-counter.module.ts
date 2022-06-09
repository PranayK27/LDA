import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyCounterComponent} from "./my-counter-comp/my-counter-comp.component";
import {BrowserModule} from "@angular/platform-browser";
import {counterReducer} from "./counter.reducer";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [MyCounterComponent],
  exports: [MyCounterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: []
})
export class MyCounterModule {}
