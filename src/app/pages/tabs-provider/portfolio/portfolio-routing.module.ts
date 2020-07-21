import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioPage } from './portfolio.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioPage
  },
  {
    path: 'offers-provider',
    loadChildren: () => import('./offers-provider/offers-provider.module').then( m => m.OffersProviderPageModule)
  },
  {
    path: 'products-provider',
    loadChildren: () => import('./products-provider/products-provider.module').then( m => m.ProductsProviderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioPageRoutingModule {}
