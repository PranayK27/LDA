import { Component, OnInit } from '@angular/core';
import {animate} from "@angular/animations";

@Component({
  standalone: true,
  selector: 'lda-footer',
  template: `
  <div class="footer4 b-t spacer">
  <div class="container text-center">
    <div class="round-social light">
      <a routerLink="#" class="link"><i class="fa fa-facebook"></i></a>
      <a routerLink="#" class="link"><i class="fa fa-twitter"></i></a>
      <a routerLink="#" class="link"><i class="fa fa-google-plus"></i></a>
      <a routerLink="#" class="link"><i class="fa fa-youtube-play"></i></a>
      <a routerLink="#" class="link"><i class="fa fa-instagram"></i></a>
    </div>
    <div class="mt-3 copyright">
      <i class="copyright"></i>
      <p>
        &copy; 2014-{{ year }} All Rights Reserved by
        Pranay Kekre<br><br>
      </p>
      <p>Version {{ version }}</p>
    </div>
  </div>
</div>

  `,
  styles: [`
    .footer4 {
      background: #222831;
    }
  `]
})
export class FooterComponent implements OnInit{
  year = "2014";
  version = "25.5.2";

  async ngOnInit() {
    this.year = new Date().getFullYear().toString();
    this.version = new Date().getFullYear().toString() +"."+ new Date().getDate() +"."+ new Date().getMonth().toString();
  }
}
