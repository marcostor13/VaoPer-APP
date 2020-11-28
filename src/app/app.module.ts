import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsModule } from './pages/tabs/tabs.module';
import { AuthModule } from './pages/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { TabsProviderModule } from './pages/tabs-provider/tabs-provider.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { StoreModule } from '@ngrx/store';
import { setDataReducer } from './reducers/setdata.reducer';
import { NzModalModule } from 'ng-zorro-antd/modal';

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [

  BrowserModule, 
    // BrowserAnimationsModule,
    NoopAnimationsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    TabsModule,
    TabsProviderModule,
    AuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot({ data: setDataReducer }, {}),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
    NzModalModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
