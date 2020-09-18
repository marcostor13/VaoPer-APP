import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule
  ],
  declarations: [ResultsPage],
  providers: [  
    SocialSharing 
  ]
})
export class ResultsPageModule {}
