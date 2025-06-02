import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'lda-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // root component
  title = "LDA";
}
