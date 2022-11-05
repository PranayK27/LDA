import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../model/books.model";

@Component({
  selector: 'lda-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent {
  @Input() books: any[] | null = [];
  @Output() remove = new EventEmitter<string>();
}
