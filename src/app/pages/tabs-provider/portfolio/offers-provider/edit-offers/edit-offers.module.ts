import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditOffersPageRoutingModule } from './edit-offers-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { EditOffersPage } from './edit-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditOffersPageRoutingModule,
    ImageCropperModule
  ],
  declarations: [EditOffersPage]
})
export class EditOffersPageModule {}
