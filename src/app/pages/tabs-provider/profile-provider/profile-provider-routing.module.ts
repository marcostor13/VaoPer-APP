import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileProviderPage } from './profile-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileProviderPage
  },
  {
    path: 'edit-profile/:id',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileProviderPageRoutingModule {}
