import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import {booksReducer} from "./state/books.reducer";
import {collectionReducer} from "./state/collection.reducer";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {BrowserModule} from "@angular/platform-browser";
import {BooksComponent} from "./books.component";
import {PagesModule} from "@lda/pages";

@NgModule({
    imports: [CommonModule,
        BrowserModule,
        StoreModule.forRoot({books: booksReducer, collection: collectionReducer}),
        HttpClientModule, PagesModule
    ],
    declarations: [BooksComponent, BookCollectionComponent, BookListComponent],
    exports: [
        BooksComponent
    ]
})
export class BooksModule {}
