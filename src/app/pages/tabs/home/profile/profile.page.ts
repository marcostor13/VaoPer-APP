import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { Subject, Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

declare var google;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  @Input() stateMenu: Observable<void>;
  eventsSubject: Subject<void> = new Subject<void>();

  
  id: any;
  //USER
  user: any;
  urlBackEnd: any = this.general.getUrlImages('profile');
  urlBackEndOffers: any = this.general.getUrlImages('offers');
  urlBackEndProducts: any = this.general.getUrlImages('products');
  companiesData: Array<any> = []
  isLoad: Boolean = true
  companyData: any = {}
  effect = 'scrollx';
  categories: any;
  itemsProducts: any = [];
  itemsFeatured: any = [];
  itemsOffers: any = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  //Modal
  isVisible: Boolean = false
  currentDescription: String = ''

  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, public general: GeneralService, private socialSharing: SocialSharing) {
    this.id = this.route.snapshot.paramMap.get('id')    
  }

  ngOnInit(): void {
    this.api.c('ID', this.id)
    this.validateSession()

    this.getCategoriesAndSubcategories()
    this.getProducts('featured');
    this.getProducts('products');
    this.getProducts('offers');
    
  }

  validateSession() {
    if (localStorage.getItem('ud')) {
      this.user = JSON.parse(localStorage.getItem('ud'))  
    }
  }

  ionViewWillEnter(){
    this.getCompanyData()
  }

  getCategoriesAndSubcategories() {

    this.isLoad = true

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

  getCompanyData() {
    this.companyData = {}

    this.isLoad = true

    let data = {
      companyid: this.id,
      service: 'get-company-data2',
      userid: this.user ? this.user.user.id : null
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('getCompanyData', result)

      this.isLoad = false

      if (result.status) {
        this.companyData = result.data       
        this.general.saveEvent('visit', this.companyData.id)
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

  back() {
    window.history.back()
  }

  share(companyid, name) {    

    const url = 'https://vaoperu.com/web/' + companyid
    const text = name
    this.socialSharing.share(text, document.title, null, url).then(_=>{
      this.general.saveEvent('share', this.companyData.id)
    })

  }

  addFeaturedCompanies(companyid, e: any) {
    this.isLoad = true
    if (e.target.src.indexOf('/assets/img/partials/star.svg') > -1) {
      this.deleteFeaturedCompanies(companyid, this.user.user.id, e)
    } else {
      if (!this.user) {
        this.router.navigate(['/login'])
      } else {
        let data = {
          userid: this.user.user.id,
          token: this.user.token,
          companyid: companyid,
          service: 'add-featured-companies'
        }
        this.api.api(data).subscribe((result: any) => {
          this.api.c('addFeaturedCompanies', result)
          this.isLoad = false
          this.general.saveEvent('featured', companyid)
          if (result.status) {
            this.api.c('addFeaturedCompanies true', e.target.disabled)
            e.target.src = '/assets/img/partials/star.svg';
          } else {
            this.api.c('addFeaturedCompanies false', result)
          }
        },
          error => {
            this.api.c('Error addFeaturedCompanies', error)

          });
      }

    }
  }

  deleteFeaturedCompanies(companyid, userid, e) {

    this.isLoad = true

    let data = {
      token: this.user.token,
      companyid: companyid,
      userid: userid,
      service: 'delete-featured-companies'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('deleteFeaturedCompanies', result)
      this.isLoad = false
      if (result.status) {
        e.target.src = '/assets/img/partials/star-g.svg';
      } else {
        this.api.c('deleteFeaturedCompanies false', result)
      }
    },
      error => {
        this.api.c('Error deleteFeaturedCompanies', error)

      });

  }



  toogleMenu() {
    this.api.c('toogleMenuFather', 'ok')
    this.eventsSubject.next();
  }  


  getProducts(type) {

    this.isLoad = true

    let data = {
      service: '',
      companyid: this.id,
    }

    switch (type) {
      case 'products':
        data.service = 'get-products'
        break;
      case 'featured':
        data.service = 'get-products-featured'
        break;
      case 'offers':
        data.service = 'get-offers'
        break;
      default:
        break;
    }

    this.api.c('getProducts pre', data)

    this.api.api(data).subscribe((res: any) => {
      this.api.c('getProducts' + type, res)

      this.isLoad = false

      if (res.status) {

        switch (type) {
          case 'products':
            this.itemsProducts['data'] = res.data
            this.itemsProducts['type'] = type
            break;
          case 'featured':
            this.itemsFeatured['data'] = res.data
            this.itemsFeatured['type'] = type
            break;
          case 'offers':
            this.itemsOffers['data'] = res.data
            this.itemsOffers['type'] = type
          default:
            break;
        }

      } else {
        this.api.c('getProducts false', res)
      }

    },
      error => {
        this.api.c('getProducts error', error)
      })

  }


  getFirstImage(array) { 
    return array[0].image;
  }





  //Modal

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  vermas(text) {
    this.currentDescription = text
    this.showModal()
  }


  message(receptorid, companyDataID, phone1) {

    if (phone1) {
      window.location.href = `https://api.whatsapp.com/send?phone=51${phone1}&text=Hola, soy usuario VAO`
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


}
