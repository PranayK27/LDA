import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MyCounterModule} from "@pranay/my-counter";
import {BooksModule} from "@pranay/books";
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ShoppingModule} from "@pranay/shopping-app";
import {ProductsModule} from "../../../../libs/shopping-app/src/lib/pages/products/products.module";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,
    MyCounterModule,
    BooksModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ShoppingModule, ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
