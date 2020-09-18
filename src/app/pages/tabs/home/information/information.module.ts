import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationPageRoutingModule } from './information-routing.module';

import { InformationPage } from './information.page';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCB0ybbsuPrkmUgezCdsyNFpyZyyyGQDqM'
    })
  ],
  declarations: [InformationPage]
})
export class InformationPageModule {}
