import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { ModalPage } from 'src/app/pages/modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-products-provider',
  templateUrl: './products-provider.page.html',
  styleUrls: ['./products-provider.page.scss'],
})
export class ProductsProviderPage implements OnInit {

  user: any;
  isVisible: boolean = false
  contentModal: any = null
  response: string = ''
  products: any = []
  urlBackEnd: any = this.general.getUrlImages('products');

  isVisibleModal: Boolean = false
  currentDescription: String = ''

  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService, public modalController: ModalController) {
  }

  ngOnInit(): void {
    this.validateSession()
    
  }

  ionViewWillEnter() {
    this.getProducts()
  }

  validateSession() {
    if (localStorage.getItem('ud')) {
      this.user = JSON.parse(localStorage.getItem('ud'))    
    }
  }

  getProducts() {

    let data = {
      service: 'get-products',
      userid: this.user.user.id,
      token: this.user.token,
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

  saveFeaturedProduct(productid, featured) {
    let data = {
      service: 'save-featured-product',
      featured: featured,
      productid: productid,
      token: this.user.token,
    }

    this.api.c('saveFeaturedProduct pre', data)

    this.api.api(data).subscribe((res: any) => {
      this.api.c('saveFeaturedProduct', res)
      this.getProducts()

    },
      error => {
        this.api.c('saveFeaturedProduct error', error)
      })

  }

  deleteProduct(productid) {
    let data = {
      service: 'delete-product',
      productid: productid,
      token: this.user.token,
    }

    this.api.c('deleteProduct pre', data)
    this.api.api(data).subscribe((res: any) => {
      this.api.c('deleteProduct', res)
      this.getProducts()

    },
      error => {
        this.api.c('deleteProduct error', error)
      })

  }

  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  getUriImage(image) {
    return encodeURI(image);
  }

  getFirstImage(array) {
    return array[0].image;
  }

  redirect(route) {
    this.router.navigate([route])
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


  isNumber(price){
    return !isNaN(Number(price));
  }

}
