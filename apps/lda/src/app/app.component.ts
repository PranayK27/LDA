import {Component, TemplateRef, ViewChild} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'pranay-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    './css/bootstrap.css', './css/style.css', './css/responsive.css', './css/style.scss', './css/font-awesome.min.css'],
})
export class AppComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
