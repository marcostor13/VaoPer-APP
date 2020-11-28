import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as action from './../actions/setdata.actions'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://api.vaoperu.com/api/';

  constructor(
    private http: HttpClient, 
    private cookie: CookieService, 
    private router: Router, 
    private firestore: AngularFirestore,
    private store: Store<{ data: any }>,
    ) { //
    // if (window.location.href.indexOf('104.155.156.43') > -1 || window.location.href.indexOf('vaoperu') > -1) {
    //   this.url = 'https://api.vaoperu.com/api/';
    // } else {
    //   this.url = 'http://localhost:8000/api/';
    // }
  }



  api(datos) {
    return this.http.post(`${this.url + datos.service}`, datos);
  }

  apiUpload(datos) {
    return this.http.post(`${this.url + datos.service}`, datos.data, datos.extra);
  }


  public createChat(data) {

    const collectionChat = 'chat_' + data.useridOri + '_' + data.useridDes
    const collectionChatReverse = 'chat_' + data.useridDes + '_' + data.useridOri

    this.firestore.collection(collectionChat).get().subscribe(res => {
      if (res.size == 0) {
        this.firestore.collection(collectionChatReverse).get().subscribe(res => {
          if (res.size == 0) {
            this.c('CreateChat', 'condifito')
            //CREATE CHAT
            this.addDocument({
              collection: collectionChat,
              data: {
                id: data.useridDes,
                message: 'Hola, ¿en qué podemos ayudarte?',
                date: new Date()
              }
            })
            //ADD ID TO LISTS CHATS ORIGIN
            const collectionListOri = 'chatlist_' + data.useridOri
            this.addDocument({
              collection: collectionListOri,
              document: collectionChat,
              data: {
                id: collectionChat,
                receptor: data.useridDes,
                date: new Date()
              }
            })

            //ADD ID TO LISTS CHATS ORIGIN
            const collectionListDes = 'chatlist_' + data.useridDes
            this.addDocument({
              collection: collectionListDes,
              document: collectionChat,
              data: {
                id: collectionChat,
                receptor: data.useridOri,
                date: new Date()
              }
            })

            //ADD ID TO LISTS NOTIFICATION DES
            const collectionNotificationDes = 'chatnotification_' + data.useridDes
            this.addDocument({
              collection: collectionNotificationDes,
              document: collectionChat,
              data: {
                id: collectionChat,
                emisor: data.useridOri,
                date: new Date()
              }
            })

          }
        })
      }
    })

  }

  public sendMessage(data: any) {
    const collectionChat = 'chat_' + data.useridOri + '_' + data.useridDes
    const collectionChatReverse = 'chat_' + data.useridDes + '_' + data.useridOri

    this.firestore.collection(collectionChat).get().subscribe(res => {
      if (res.size == 0) {
        this.firestore.collection(collectionChatReverse).get().subscribe(res => {
          if (res.size > 0) {
            //collectionChatReverse
            this.addDocument({
              collection: collectionChatReverse,
              data: {
                message: data.message,
                id: data.useridOri,
                date: new Date
              }
            })

            //ADD NOTIFICATION
            this.addDocument({
              collection: 'chatnotification_' + data.useridDes,
              data: {
                id: collectionChat,
                emisor: data.useridOri,
                date: new Date()
              }
            })


          }
        })
      } else {
        //collectionChat
        this.addDocument({
          collection: collectionChat,
          data: {
            message: data.message,
            id: data.useridOri,
            date: new Date
          }
        })

        //ADD NOTIFICATION
        this.addDocument({
          collection: 'chatnotification_' + data.useridDes,
          data: {
            id: collectionChat,
            emisor: data.useridOri,
            date: new Date()
          }
        })
      }
    })
  }


  public addDocument(data: any) {
    return this.firestore.collection(data.collection).add(data.data);
  }


  public createDoc(data: any) {
    return this.firestore.collection(data.collection).doc(data.document).set(data.data);
  }

  public getDocument(data: any) {
    return this.firestore.collection(data.collection).doc(data.document).snapshotChanges();
  }

  public getDocuments(data: any) {
    return this.firestore.collection(data.collection).snapshotChanges();
  }

  public updateDocument(data: any) {
    return this.firestore.collection(data.collection).doc(data.document).set(data.data);
  }





  c(title, message) {
    console.log('%c' + title + '%c=>', "background-color: purple; color:white;font-family:system-ui;font-size:10pt;font-weight:bold;padding: 4px", "background-color: white; color:purple;font-size:10pt;font-weight:bold;padding: 4px", message);
  }

  
  getData(){
    return 
  }

  setData(data: any) {
    this.store.dispatch(action.setdata({ data: data }))
  }



}
