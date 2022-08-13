import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'pranay-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent  {
  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();


  onClick(): void {
    console.log('click');
    this.addToCartClick.emit(this.product);
  }

}
