import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-offers-provider',
  templateUrl: './offers-provider.page.html',
  styleUrls: ['./offers-provider.page.scss'],
})
export class OffersProviderPage implements OnInit {

  user: any;
  isVisible: boolean = false
  contentModal: any = null
  response: string = ''
  offers: any = []
  urlBackEnd: any = this.general.getUrlImages('offers');

  isVisibleModal: Boolean = false
  currentDescription: String = ''
  isLoad: Boolean = false

  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService, private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.validateSession()
    
  }

  ionViewWillEnter() {
    this.getOffers()
  }

  validateSession() {

    if (localStorage.getItem('ud')) {
      this.user = JSON.parse(localStorage.getItem('ud'))
    } else {
      window.location.href = '/login'
    }
  }

  back() {
    window.history.back()
  }


  getOffers() {

    let data = {
      service: 'get-offers',
      userid: this.user.user.id,
      token: this.user.token,
    }

    this.api.c('getOffers pre', data)

    this.api.api(data).subscribe((res: any) => {
      this.api.c('getOffers', res)

      if (res.status) {
        this.offers = res.data       

      } else {
        this.api.c('getOffers false', res)
      }

    },
      error => {
        this.api.c('getOffers error', error)
      })

  }

  deleteOffer(offerid) {
    let data = {
      service: 'delete-offer',
      offerid: offerid,
      token: this.user.token,
    }

    this.api.c('deleteOffer pre', data)
    this.api.api(data).subscribe((res: any) => {
      this.api.c('deleteOffer', res)
      this.getOffers()

    },
      error => {
        this.api.c('deleteOffer error', error)
      })

  }

  getOfferByIdAndDelete(offerid) {
    this.isLoad = true
    let data = {
      service: 'get-offer-by-id',
      userid: this.user.user.id,
      offerid: offerid,
      token: this.user.token,
    }

    this.api.c('getOfferByIdAndDelete pre', data)

    this.api.api(data).subscribe((res: any) => {
      this.api.c('getOfferByIdAndDelete', res)

      if (res.status) {
        this.deleteOffer(offerid)
        this.storage.storage.refFromURL(res.data.image).delete();
        this.isLoad = false

      } else {
        this.api.c('getOfferByIdAndDelete false', res)
        this.isLoad = false
      }

    },
      error => {
        this.api.c('getOfferByIdAndDelete error', error)
      })

  }


  getUriImage(image) {
    return encodeURI(image)
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

  

}

