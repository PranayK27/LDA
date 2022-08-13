import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MojicodeComponent } from './pages/mojicode/mojicode.component';
import {HttpClientModule } from '@angular/common/http';
import { CartComponent } from './shared/components/cart/cart.component';
import {ShoppingappRoutingModule} from "./shoppingapp-routing.module";
import {ShoppingComponent} from "./shopping.component";
//import {AppModule} from "../../../../apps/lda/src/app/app.module";


@NgModule({
  declarations: [
    HeaderComponent,
    MojicodeComponent,
    CartComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShoppingappRoutingModule,

  ],
  providers: [],
    exports: [
        ShoppingComponent,
        HeaderComponent
    ],
  bootstrap: []
})
export class ShoppingModule { }
