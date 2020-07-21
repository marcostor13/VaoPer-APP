import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersProviderPage } from './offers-provider.page';

const routes: Routes = [
  {
    path: '',
    component: OffersProviderPage
  },
  {
    path: 'edit-offers/:id',
    loadChildren: () => import('./edit-offers/edit-offers.module').then( m => m.EditOffersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersProviderPageRoutingModule {}
