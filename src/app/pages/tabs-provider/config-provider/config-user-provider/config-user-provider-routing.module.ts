import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigUserProviderPage } from './config-user-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigUserProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigUserProviderPageRoutingModule {}
