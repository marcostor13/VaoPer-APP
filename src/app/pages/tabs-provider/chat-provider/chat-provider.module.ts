import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatProviderPageRoutingModule } from './chat-provider-routing.module';

import { ChatProviderPage } from './chat-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatProviderPageRoutingModule
  ],
  declarations: [ChatProviderPage]
})
export class ChatProviderPageModule {}
