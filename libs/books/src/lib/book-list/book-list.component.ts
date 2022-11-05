import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../model/books.model";

@Component({
  selector: 'lda-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  @Input() books: ReadonlyArray<Book> | null = [];
  @Output() add = new EventEmitter<string>();

}
