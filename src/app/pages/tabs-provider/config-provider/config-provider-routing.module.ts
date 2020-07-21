import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigProviderPage } from './config-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigProviderPageRoutingModule {}
