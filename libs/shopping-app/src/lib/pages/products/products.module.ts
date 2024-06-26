import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from '../../material.module';


@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent
    ],
    exports: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MaterialModule
    ]
})
export class ProductsModule { }
