import { Component, OnInit } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  notifications: Number = 0; 
  user: any;

  constructor(private firestore: AngularFirestore, public router: Router, private api: ApiService, private cookie: CookieService) { 
    this.validateSession()
  }

  ngOnInit() {
    
  }

  validateSession() {
    
    if (localStorage.getItem('ud')) {     
      this.user = JSON.parse(localStorage.getItem('ud'))
      if(this.user.user.role_id == 2){
        window.location.href = '/tabs-provider'
      }
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
