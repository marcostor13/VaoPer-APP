import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersProviderPageRoutingModule } from './offers-provider-routing.module';

import { OffersProviderPage } from './offers-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersProviderPageRoutingModule
  ],
  declarations: [OffersProviderPage]
})
export class OffersProviderPageModule {}
