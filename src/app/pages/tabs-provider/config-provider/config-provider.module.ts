import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigProviderPageRoutingModule } from './config-provider-routing.module';

import { ConfigProviderPage } from './config-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigProviderPageRoutingModule
  ],
  declarations: [ConfigProviderPage]
})
export class ConfigProviderPageModule {}
