import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsProviderPage } from './products-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsProviderPage
  },
  {
    path: 'edit-products/:id',
    loadChildren: () => import('./edit-products/edit-products.module').then( m => m.EditProductsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsProviderPageRoutingModule {}
