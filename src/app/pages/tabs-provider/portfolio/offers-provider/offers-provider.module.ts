import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersProviderPageRoutingModule } from './offers-provider-routing.module';

import { OffersProviderPage } from './offers-provider.page';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersProviderPageRoutingModule,
    ImageCropperModule,
    NzModalModule,
  ],
  declarations: [OffersProviderPage]
})
export class OffersProviderPageModule {}
