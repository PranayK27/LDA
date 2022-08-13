import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'pranay-header',
  template: `
  <mat-toolbar color="primary">
    <a [routerLink]="['/']">

      <span>
      KK Shoping Cart
      </span>
    </a>

    <span class="spacer">
    </span>
  <pranay-cart class="mat-icon_s" (click)="goToCheckout()"></pranay-cart>


</mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
