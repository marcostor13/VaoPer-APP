import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  chats: Observable<any[]>;
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

  eventsSubject: Subject<void> = new Subject<void>();


  constructor(private firestore: AngularFirestore, private api: ApiService, private cookie: CookieService, private router: Router, public route: ActivatedRoute) {

    this.validateSession()

    if (this.route.snapshot.paramMap.get('id')){
      this.id = this.route.snapshot.paramMap.get('id')
    }else{
      this.id = '0'
    }

    //get notifications
    firestore.collection('chatnotification_' + this.user.user.id).valueChanges().subscribe((res: any) => {

      this.api.c('Notifications', res)

      this.noti = res;


    })

    //get Chats
    this.chats = firestore.collection('chatlist_' + this.user.user.id, ref=> ref.orderBy('date', 'desc') ).valueChanges();

    this.chats.forEach((res) => {
      this.api.c('Chats', res)
      res.forEach((item) => {
        this.api.c('Chats item ', item)
        this.getNameReceptop(item.receptor)
      })
    })

    moment.locale("es");
  }

  invertChatid(id){

    let ids= id.split('_')

    return ids[0] + '_' + ids[2] + '_' + ids[1]

  }

  getNotification(id) {
    

    var notifi = 0;
    for (let index = 0; index < this.noti.length; index++) {
      const element = this.noti[index];

      if (element.id == this.invertChatid(id)) {
        notifi++
      }

    }
    return notifi

  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollMe ? this.scrollMe.nativeElement: false;
    this.scrollContainer2 = this.scrollMe2 ? this.scrollMe2.nativeElement : false;
  }


  ngOnInit(): void {  

    if (this.id != 0) {
      setTimeout(()=>{
        this.getMessages(this.id)
      }, 2000)
    }

  }

  validateSession() {
    if (!localStorage.getItem('ud') || localStorage.getItem('ud') == '') {
      this.router.navigate(['/login'])
    } else {
      this.user = JSON.parse(localStorage.getItem('ud'))
      this.api.c('user', this.user)
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

    this.firestore.collection(collection).get().subscribe(async res => {

      this.firestore.collection(collectionChatNotification).get().subscribe((res: any) => {

        res.docs.forEach(async (doc:any) => {
          this.firestore.collection(collectionChatNotification).doc(doc.id).get().subscribe(async (result:any)=>{
            
            if (result.data().id == 'chat_' + idReceptor + '_' + this.user.user.id){
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
    this.scrollContainer = this.scrollMe ? this.scrollMe.nativeElement : false;
    this.scrollContainer2 = this.scrollMe2 ? this.scrollMe2.nativeElement : false;

    if (this.scrollContainer){

      this.scrollContainer.scroll({
        top: this.scrollContainer.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }


    if (this.scrollContainer2){
      this.scrollContainer2.scroll({
        top: this.scrollContainer2.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }

  }








}
