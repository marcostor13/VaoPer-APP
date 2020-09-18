import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigProviderPage } from './config-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigProviderPage
  },
  {
    path: 'config-user-provider',
    loadChildren: () => import('./config-user-provider/config-user-provider.module').then( m => m.ConfigUserProviderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigProviderPageRoutingModule {}
