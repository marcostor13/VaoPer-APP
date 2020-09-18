import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProductsPageRoutingModule } from './edit-products-routing.module';

import { EditProductsPage } from './edit-products.page';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProductsPageRoutingModule,
    ImageCropperModule,
  ],
  declarations: [EditProductsPage]
})
export class EditProductsPageModule {}
