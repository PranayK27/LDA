import { Component } from '@angular/core';
import { ShoppingCartService } from '../../../shared/components/services/shopping-cart.service';

@Component({
  selector: 'lda-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent  {

  total$= this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;


  constructor(private shoppingCartSvc: ShoppingCartService) { }



}
