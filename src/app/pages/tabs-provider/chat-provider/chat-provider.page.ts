import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-chat-provider',
  templateUrl: './chat-provider.page.html',
  styleUrls: ['./chat-provider.page.scss'],
})
export class ChatProviderPage implements OnInit {

  chats: Observable<any[]>;
  notifications: Observable<any[]>;
  user: any;
  dataUsers: any = []
  id: any;
  messages: Observable<any[]>;
  textMessage: String = ''
  currentReceptor: any;
  listChatActive: Boolean = true
  scrollContainer: any;
  scrollContainer2: any;

  noti: any = []

  @ViewChild('scrollMe', { static: false }) scrollMe: ElementRef;
  @ViewChild('scrollMe2', { static: false }) scrollMe2: ElementRef;


  constructor(private firestore: AngularFirestore, private api: ApiService, private cookie: CookieService, private router: Router, public route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id')
    this.validateSession(this.id)

    //get notifications
    firestore.collection('chatnotification_' + this.user.user.id).valueChanges().subscribe((res: any) => {

      this.api.c('Notifications', res)

      this.noti = res;


    })



    //get Chats
    this.chats = firestore.collection('chatlist_' + this.user.user.id, ref => ref.orderBy('date', 'desc')).valueChanges();



    this.chats.forEach((res) => {
      this.api.c('Chats', this.notifications)
      res.forEach((item) => {
        this.api.c('Chats item ', item)
        this.getNameReceptop(item.receptor)
      })
    })

    moment.locale("es");
  }


  getNotification(id) {

    var notifi = 0;
    for (let index = 0; index < this.noti.length; index++) {
      const element = this.noti[index];

      if (element.id == id) {
        notifi++
      }

    }
    return notifi

  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollMe ? this.scrollMe.nativeElement:null;
    this.scrollContainer2 = this.scrollMe2? this.scrollMe2.nativeElement: null;
  }


  ngOnInit(): void {

    if (this.id != 0) {
      this.getMessages(this.id)
    }

  }

  validateSession(iduserchat) {

    if (!localStorage.getItem('ud') || localStorage.getItem('ud') == '') {
      this.router.navigate(['/login'])
    } else {
      this.user = JSON.parse(localStorage.getItem('ud'))
      // if (this.user.user.role !== "proveedor" && this.user.user.role !== "admin") {
      //   this.router.navigate(['/chat-user/' + iduserchat])
      // }
    }
  }

  formatDate(date) {
    return moment(date.toDate()).calendar();
  }


  getNameReceptop(id) {

    let data = {
      service: 'get-data-user-by-id',
      token: this.user.token,
      userid: id
    }

    this.api.api(data).subscribe((res: any) => {
      this.api.c('getNameReceptop', res)
      this.dataUsers[id] = res
      this.dataUsers = this.dataUsers
      this.api.c('dataUsers', this.dataUsers)

    },
      error => {
        this.api.c('getProducts error', error)
      })

  }

  async getMessages(idReceptor) {

    var self = this
    this.listChatActive = false
    let collection = 'chat_' + this.user.user.id + '_' + idReceptor
    let collectionReverse = 'chat_' + idReceptor + '_' + this.user.user.id
    let collectionChatNotification = 'chatnotification_' + this.user.user.id

    await this.firestore.collection(collection).get().subscribe(async res => {

      await this.firestore.collection(collectionChatNotification).get().subscribe((res:any)=>{
        
        res.docs.forEach(async doc => {
          this.firestore.collection(collectionChatNotification).doc(doc.id).get().subscribe(async (result: any) => {
            if (result.data().id == 'chat_' + idReceptor + '_' + this.user.user.id) {
              await this.firestore.collection(collectionChatNotification).doc(result.id).delete()
            }
          })
        });       

      })

      if (res.size != 0) {
        this.messages = this.firestore.collection(collection, ref => ref.orderBy('date')).valueChanges()
      } else {
        this.messages = this.firestore.collection(collectionReverse, ref => ref.orderBy('date')).valueChanges()
      }
      this.messages.subscribe((res) => {
        setTimeout(() => {

          self.scrollToBottom()
        }, 2000)
      })
    })
    this.currentReceptor = idReceptor

  }




  sendMessage() {

    let data = {
      message: this.textMessage,
      useridOri: this.user.user.id,
      useridDes: this.currentReceptor,
    }

    this.api.sendMessage(data)
    this.textMessage = ''
    this.scrollToBottom()

  }

  scrollToBottom(): void {
    this.scrollContainer = this.scrollMe.nativeElement;
    this.scrollContainer2 = this.scrollMe2.nativeElement;

    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });

    this.scrollContainer2.scroll({
      top: this.scrollContainer2.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }


}
