import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigUserProviderPageRoutingModule } from './config-user-provider-routing.module';

import { ConfigUserProviderPage } from './config-user-provider.page';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigUserProviderPageRoutingModule,
    ImageCropperModule
  ],
  declarations: [ConfigUserProviderPage]
})
export class ConfigUserProviderPageModule {}
