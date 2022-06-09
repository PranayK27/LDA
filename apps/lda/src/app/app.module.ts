import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MyCounterModule} from "@pranay/my-counter";
import {MyCounterComponent} from "../../../../libs/my-counter/src/lib/my-counter-comp/my-counter-comp.component";
import {BooksModule} from "@pranay/books";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MyCounterModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
