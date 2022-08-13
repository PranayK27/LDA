import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../../../pages/products/interfaces/product.interface';
@Injectable(
    { providedIn: 'root' }
)

export class ShoppingCartService {

    products: Product[] = [];

    private cartSubject = new BehaviorSubject<Product[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private quantitySubject = new BehaviorSubject<number>(0);


    get totalAction$(): Observable<number> {
        return this.totalSubject.asObservable();
    }
    get quantityAction$(): Observable<number> {
        return this.quantitySubject.asObservable();
    }

    get cartAction$(): Observable<Product[]> {
        return this.cartSubject.asObservable();
    }

    updateCart(product: Product): void {
        this.addToCart(product);
        this.quiantityProducts();
        this.calcTotal();
    }

    private addToCart(product: Product): void {
        const isProdctInCart = this.products.find(({ id }) => id === product.id);
        if (isProdctInCart) {
            isProdctInCart.qty += 1;
        } else {
            this.products.push({ ...product, qty: 1 })
        }
        this.cartSubject.next(this.products);
    }

    private quiantityProducts(): void {
        const quantity = this.products.reduce((acc, prod) => acc += prod.qty, 0);
        this.quantitySubject.next(quantity);
    }

    private calcTotal(): void {
        const total = this.products.reduce((acc, prod) => acc += (prod.price * prod.qty), 0);
        this.totalSubject.next(total);
    }




}
