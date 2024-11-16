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
      All Rights Reserved by Pranay Kekre.
    </div>
  </div>
</div>

  `,
  styles: [``]
})
export class FooterComponent {}
