import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsProviderPageRoutingModule } from './products-provider-routing.module';

import { ProductsProviderPage } from './products-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsProviderPageRoutingModule
  ],
  declarations: [ProductsProviderPage]
})
export class ProductsProviderPageModule {}
