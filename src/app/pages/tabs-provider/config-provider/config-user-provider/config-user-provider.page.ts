import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-config-user-provider',
  templateUrl: './config-user-provider.page.html',
  styleUrls: ['./config-user-provider.page.scss'],
})
export class ConfigUserProviderPage implements OnInit {

  user: any;
  isDesktop: any;
  isLoad: any = false
  categories: any;

  responseName: String = ''
  responsePassword: String = ''
  // username: String = ''
  currentpassword: String = ''
  password: String = ''
  repassword: String = ''
  username: String = ''

  eventsSubject: Subject<void> = new Subject<void>();

  //MODAL

  isVisibleModal: Boolean = false
  isVisibleCortar: Boolean = false

  constructor(private router: Router, private api: ApiService, private cookie: CookieService) {
    
  }

  ngOnInit(): void {
    this.validateSession()

  }

  back() {
    window.history.back()
  }

  validateSession() {
    if (localStorage.getItem('ud') && localStorage.getItem('ud') != '') {
      this.user = JSON.parse(localStorage.getItem('ud'))
      this.api.c('user', this.user)
      this.getCategoriesAndSubcategories()
      this.getUsername()
      this.getImageProfile()
    }
  }

  getCategoriesAndSubcategories() {

    let data = {
      service: 'get-categories-and-subcategories'
    }
    this.api.api(data).subscribe(result => {
      this.api.c('getCategoriesAndSubcategories result', result)
      this.categories = result
      this.isLoad = false
    },
      error => {
        this.api.c('Error getCategoriesAndSubcategories', error)
      });

  }

  toogleMenuHome() {
    this.api.c('toogleMenuFather2', this.eventsSubject)
    this.eventsSubject.next();
  }


  saveImageProfile() {

    let data = {
      service: 'save-image-profile',
      token: this.user.token,
      userid: this.user.user.id,
      imageprofile: this.croppedImage,
    }
    this.api.api(data).subscribe((res: any) => {
      this.api.c('saveImageProfile result', res)
      this.croppedImage = '';
      this.isVisibleCortar = false
    },
      error => {
        this.api.c('Error saveImageProfile', error)
      });

  }

  getImageProfile() {
    let data = {
      service: 'get-image-profile',
      token: this.user.token,
      userid: this.user.user.id
    }
    this.api.api(data).subscribe((res: any) => {
      this.api.c('getImageProfile result', res)
      if (res.status) {
        if (res.data && res.data != 'null') {
          this.croppedImage = res.data
        } else {
          this.croppedImage = null
        }
      }
    },
      error => {
        this.api.c('Error getImageProfile', error)
      });
  }

  changePassword() {

    if (this.currentpassword == '' || this.password == '' || this.repassword == '') {
      this.responsePassword = 'Debe completar todos los campos'
    } else if (this.password !== this.repassword) {
      this.responsePassword = 'Las contraseñas no coinciden'
    } else {
      let data = {
        service: 'change-password',
        token: this.user.token,
        userid: this.user.user.id,
        password: this.password,
      }
      this.api.api(data).subscribe((res: any) => {
        this.api.c('saveImageProfile result', res)
        if (res.status) {
          this.responsePassword = res.message
        }
      },
        error => {
          this.api.c('Error saveImageProfile', error)
        });
    }
  }

  saveUserName() {

    let data = {
      service: 'save-user-name',
      token: this.user.token,
      userid: this.user.user.id,
      username: this.username,
    }
    this.api.api(data).subscribe((res: any) => {
      this.api.c('saveUserName result', res)
      if (res.status) {
        this.responseName = res.message
      }
    },
      error => {
        this.api.c('Error saveUserName', error)
      });
  }

  getUsername() {
    let data = {
      service: 'get-user-name',
      token: this.user.token,
      userid: this.user.user.id,
    }
    this.api.api(data).subscribe((res: any) => {
      this.api.c('getUsername result', res)
      if (res.status) {
        if (res.data && res.data != 'null') {
          this.username = res.data
        }
      }
    },
      error => {
        this.api.c('Error getUsername', error)
      });
  }


  //IMAGE

  imageChangedEvent: any = '';
  croppedImage: any = '/assets/img/partials/user.svg';
  imagesArray: any = []

  fileChangeEvent(event: any): void {
    this.showModalCortar()
    this.imageChangedEvent = event
    // this.api.c('fileChangeEvent', event)
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;

  }

  imageLoaded() {
    // this.api.c('imageLoaded', 'ok')
  }
  cropperReady() {
    // this.api.c('cropperReady', 'ok')
  }
  loadImageFailed() {
    // this.api.c('loadImageFailed', 'ok')
  }


  //MODAL


  showModalCortar(): void {
    this.isVisibleCortar = true
  }



  handleCancelCortar(): void {
    this.isVisibleCortar = false
  }

}
