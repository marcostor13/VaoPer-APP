import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './../../../modal/modal.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  id: any;
  type: any;
  //USER
  user: any;
  isVisible: boolean = false
  contentModal: any = null
  response: string = ''
  products: any = []
  urlBackEnd: any = this.general.getUrlImages('products');
  companyData: any = {}

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  //Modal
  isVisibleModal: Boolean = false
  currentDescription: String = ''

  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService, public modalController: ModalController) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.type = this.route.snapshot.paramMap.get('type')
  }

  ngOnInit(): void {
    this.validateSession()
    
  }

  ionViewWillEnter() {
    this.getProducts()
    this.getCompanyData()
  }

  validateSession() {

    if (localStorage.getItem('ud')) {
      this.user = JSON.parse(localStorage.getItem('ud'))
    }

  }


  getProducts() {

    let data = {
      service: '',
      companyid: this.id,
    }

    switch (this.type) {
      case 'products':
        data.service = 'get-products'
        break;
      case 'featured':
        data.service = 'get-products-featured'
        break;
      case 'offers':
        // data.companyid = '';
        // data['userid'] = this.id;
        data.service = 'get-offers'
        this.urlBackEnd = this.general.getUrlImages('offers');
        break;
      default:
        break;
    }

    this.api.c('getProducts pre', data)

    this.api.api(data).subscribe((res: any) => {
      this.api.c('getProducts', res)

      if (res.status) {
        this.products = res.data
      } else {
        this.api.c('getProducts false', res)
      }

    },
      error => {
        this.api.c('getProducts error', error)
      })

  }

  getCompanyData() {
    let data = {
      companyid: this.id,
      service: 'get-company-data2'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('getCompanyData', result)

      if (result.status) {
        this.companyData = result.data
      } else {
        this.api.c('getCompanyData False', result)
      }

    },
      error => {
        this.api.c('Error getCompanyData', error)

      });
  }



  getUriImage(image) {
    return encodeURI(image)
  }

  redirect(route) {
    this.router.navigate([route])
  }

  back() {
    window.history.back()
  }

  getFirstImage(array) {
    return array[0].image;
  }

  //Modal

  showModal(): void {
    this.isVisibleModal = true;
  }

  handleOk(): void {
    this.isVisibleModal = false;
  }

  handleCancel(): void {
    this.isVisibleModal = false;
  }

  vermas(text) {
    this.currentDescription = text
    this.showModal()
  }

  // getDataCompanyById(){
  //   let data = {
  //     companyid: this.id,
  //     service: 'get-data-company-by-id'
  //   }
  //   this.api.api(data).subscribe((result: any) => {
  //     this.api.c('getDataCompanyById', result)

  //     this.companyData


  //   },
  //     error => {
  //       this.api.c('Error getCompanyData', error)

  //     });
  // }



  message(receptorid, companyDataID, phone1) {

    if (phone1) {
      window.location.href = `https://api.whatsapp.com/send?phone=51${phone1}&text=Hola, necesito más información`
    }

    // if (!this.user) {
    //   this.router.navigate(['/login'])
    // } else {
    //   if (this.user.user.id != receptorid) {

    //     if (this.createChat(this.user.user.id, receptorid)) {
    //       this.router.navigate(['/tabs/chat/' + receptorid])
    //     }

    //   }
    // }

    this.general.saveEvent('message', companyDataID)

  }


  createChat(useridOri, useridDes) {
    this.api.createChat({
      collection: 'chats',
      token: this.user.token,
      useridOri: useridOri,
      useridDes: useridDes
    })

    return true;
  }


  //MODAL

  async presentModal(content) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal-class',
      componentProps: {
        'title': 'Descripción',
        'content': content,
        'modal': this
      }

    });
    return await modal.present();
  }



}
