import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCounterModule } from "@lda/my-counter";
import {BooksModule} from "@lda/books";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ButtonModule} from "primeng/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TechnologiesModule} from "@lda/technologies";
import {PagesModule} from "@lda/pages";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "../../../../libs/my-counter/src/lib/counter.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {
  MultipleClassSelectorComponent
} from "@storybook/angular/template/stories/basics/component-with-complex-selectors/multiple-selector.component";
import {ComponentsModule} from "@lda/common";
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    MultipleClassSelectorComponent
  ],
  imports: [
    StoreModule.forRoot(counterReducer),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      // trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      // traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    BrowserModule,
    MyCounterModule,
    // BooksModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ButtonModule,
    MatTableModule,
    MatPaginatorModule,
    TechnologiesModule,
    // PagesModule,
    ComponentsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
