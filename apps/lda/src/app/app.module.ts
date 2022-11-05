import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MyCounterModule} from "@pranay/my-counter";
import {BooksModule} from "@pranay/books";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {AppRoutingModule} from "./app-routing.module";
import {ListComponent} from "../../../../libs/technologies/src/lib/technologies/list/list.component";
import {RouterModule} from "@angular/router";
import {TechnologiesComponent} from "../../../../libs/technologies/src/lib/technologies/technologies.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {
  TechnologiesRoutingModule
} from "../../../../libs/technologies/src/lib/technologies-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ListComponent,
    TechnologiesComponent
  ],
    imports: [
        BrowserModule,
        MyCounterModule,
        BooksModule,
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
        TechnologiesRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        ButtonModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
