import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsProviderRoutingModule } from './tabs-provider-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsProviderComponent } from './tabs-provider.component';
import { Device } from '@ionic-native/device/ngx';

@NgModule({
  declarations: [
    TabsProviderComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsProviderRoutingModule,    
  ], 
  providers: [Device]
})
export class TabsProviderModule { }
