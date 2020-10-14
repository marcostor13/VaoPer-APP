import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [
  
  CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule,
    NzModalModule,
    NzSelectModule
  ],
  declarations: [ResultsPage],
  providers: [  
    SocialSharing 
  ]
})
export class ResultsPageModule {}
