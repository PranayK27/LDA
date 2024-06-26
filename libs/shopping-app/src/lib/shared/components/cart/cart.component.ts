import { Component } from "@angular/core";
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
    selector: 'pranay-cart',
    template: `
    <ng-container *ngIf="{total:total$ | async , quantity:quantity$ |async} as dataCart">

        <ng-container *ngIf="dataCart.total">
        <mat-icon>add_shopping_cart</mat-icon>
        {{dataCart.total | currency}}
        ({{dataCart.quantity}})
        </ng-container>

    </ng-container>`
})

export class CartComponent {

    constructor(private shoppingCartSvc: ShoppingCartService) { }

    quantity$ = this.shoppingCartSvc.quantityAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    cartAction$ = this.shoppingCartSvc.cartAction$;
}
