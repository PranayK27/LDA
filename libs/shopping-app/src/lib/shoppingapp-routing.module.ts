import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MojicodeComponent } from './pages/mojicode/mojicode.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },

  {
    path: 'mojicode',
    component: MojicodeComponent
  },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShoppingappRoutingModule { }
