import { Component, OnInit } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tabs-provider',
  templateUrl: './tabs-provider.component.html',
  styleUrls: ['./tabs-provider.component.scss'],
})
export class TabsProviderComponent implements OnInit {

  notifications: Number = 0;
  user: any;

  constructor(private firestore: AngularFirestore, public router: Router, private api: ApiService, private cookie: CookieService) { }

  ngOnInit() {
    this.validateSession()
  }

  validateSession() {

    if (localStorage.getItem('ud')) {     
      this.user = JSON.parse(localStorage.getItem('ud'))
      // this.getMessages()
    }

  }


  getMessages() {

    this.api.c('getMessages Menú', 'Init')
    let collection = 'chatnotification_' + this.user.user.id

    this.firestore.collection(collection).valueChanges().subscribe((res) => {
      this.api.c('MENSAJES NOTIFICACIONES', res.length)
      this.notifications = res.length
    })

  }

}
