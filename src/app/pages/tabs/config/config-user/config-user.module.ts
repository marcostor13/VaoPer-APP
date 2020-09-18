import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigUserPageRoutingModule } from './config-user-routing.module';

import { ConfigUserPage } from './config-user.page';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigUserPageRoutingModule,
    ImageCropperModule
  ],
  declarations: [ConfigUserPage]
})
export class ConfigUserPageModule {}
