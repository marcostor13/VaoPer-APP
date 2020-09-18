import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigPage } from './config.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigPage
  },  {
    path: 'config-user',
    loadChildren: () => import('./config-user/config-user.module').then( m => m.ConfigUserPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigPageRoutingModule {}
