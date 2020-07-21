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

    //get Chats
    this.chats = firestore.collection('chatlist_' + this.user.user.id).valueChanges();

    this.chats.forEach((res) => {
      this.api.c('Chats', res)
      res.forEach((item) => {
        this.api.c('Chats item ', item)
        this.getNameReceptop(item.receptor)
      })
    })

    moment.locale("es");
  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollMe.nativeElement;
    this.scrollContainer2 = this.scrollMe2.nativeElement;
  }


  ngOnInit(): void {

    //Create Chat
    // this.api.createChat({
    //   collection: 'chats',
    //   token: this.user.token,
    //   useridOri: this.id.split('-')[0],
    //   useridDes: this.id.split('-')[1]
    // })

    //SEND MESSAGE    

    // this.api.sendMessage({
    //   message: 'Mensaje de 2 para 1',
    //   useridOri: 2,
    //   useridDes: 1
    // })

    if (this.id != 0) {
      this.getMessages(this.id)
    }


    // setTimeout(()=>{
    //   this.scrollToBottom()
    // }, 4000)


  }

  validateSession() {
    if (!this.cookie.get('ud') || this.cookie.get('ud') == '') {
      this.router.navigate(['/login'])
    } else {
      this.user = JSON.parse(this.cookie.get('ud'))
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

  getMessages(idReceptor) {

    var self = this;

    this.listChatActive = false

    let collection = 'chat_' + this.user.user.id + '_' + idReceptor;
    let collectionReverse = 'chat_' + idReceptor + '_' + this.user.user.id;

    this.firestore.collection(collection).get().subscribe(res => {

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
