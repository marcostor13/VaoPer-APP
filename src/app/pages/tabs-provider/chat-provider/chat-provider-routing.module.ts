import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatProviderPage } from './chat-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ChatProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatProviderPageRoutingModule {}
