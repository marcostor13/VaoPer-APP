import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { Observable, Subject } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

const { Geolocation, Network } = Plugins;

declare var google;

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  @Input() stateMenu: Observable<void>;
  eventsSubject: Subject<void> = new Subject<void>();

  id: any;
  //USER
  user: any;
  urlBackEnd: any = this.general.getUrlImages('profile');
  companiesData: Array<any> = [];
  companiesData2: any;
  isLoad: Boolean = true
  service = new google.maps.DistanceMatrixService;
  search: any = ''
  response: any = false
  categories: any;

  //POSITION

  currentPosition: any = {}

  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, public general: GeneralService, private socialSharing: SocialSharing) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.validateSession()
    
  }

  ionViewWillEnter() {
    this.getCompaniesData()    
    this.getCategoriesAndSubcategories()
  }

  getCategoriesAndSubcategories() {

    let data = {
      service: 'get-categories-and-subcategories'
    }
    this.api.api(data).subscribe(result => {
      this.api.c('getCategoriesAndSubcategories result', result)
      this.categories = result
      // this.isLoad = false
    },
      error => {
        this.api.c('Error getCategoriesAndSubcategories', error)
      });

  }

  back() {
    window.history.back()
  }

  searchEvent() {
    this.router.navigate(['/results/' + this.search]).then(() => {
      window.location.reload();
    });

  }



  validateSession() {
    if (localStorage.getItem('ud')) {
      this.user = JSON.parse(localStorage.getItem('ud'))   
      this.getFeaturedCompanies()
    }
  }

  getCompaniesData() {

    this.companiesData = []

    let data = {
      search: this.id,
      service: 'get-companies-data',
      userid: this.user ? this.user.user.id : null
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('getCompaniesData', result)
      if (result.status) {
        if (result.data.length > 0) {
          this.getCurrentPosition(this.deleteDuplicados(result.data))          
        } else {
          this.response = 'No hay resultados'
          this.isLoad = false
        }

      } else {
        this.api.c('getCompaniesData false', result)
      }
    },
      error => {
        this.api.c('Error getCompaniesData', error)

      });
  }

  getUriImage(image) {
    return encodeURI(image)
  }


  getCurrentPosition(companiesData) {
    this.general.getPosition().then(pos => {

      this.currentPosition = {
        lat: pos.lat,
        lng: pos.lng
      }

    }).then(() => {
      this.getDistances(companiesData)
      this.isLoad = false
    })
  }

  orderCompanies(companiesData){
    setTimeout(() => {
      
        this.api.c('this.companiesData.length', this.companiesData.length)
        this.companiesData = this.companiesData.sort(function (a, b) {
          if (a['distanceValue'] > b['distanceValue']) {
            return 1;
          }
          if (a['distanceValue'] < b['distanceValue']) {
            return -1;
          }
          return 0;
        })
        this.isLoad = false       
    
    }, 1000)
  }

  getDistances(companiesData) {

    for (let i = 0; i < companiesData.length; i++) {
      const element = companiesData[i]
      if (element.address1) {
        var place = element.address1
        this.getDistance(place, i, companiesData)
      }

      if (companiesData.length == i+1){
        this.api.c('Terminado', 'ok')
        this.orderCompanies(companiesData)
      }
    }

  }



  getDistance(destinationPosition, i, companiesData) {

    this.service.getDistanceMatrix({
      origins: [this.currentPosition],
      destinations: [destinationPosition],
      travelMode: google.maps.TravelMode['DRIVING'],
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, response => {

      companiesData[i]['distance'] = response.rows[0].elements[0].distance ? response.rows[0].elements[0].distance.text : ''
      companiesData[i]['distanceValue'] = response.rows[0].elements[0].distance ? response.rows[0].elements[0].distance.value : 1000000

      if (response.destinationAddresses) {
        let dest = response.destinationAddresses[0].split(',')

        if (dest.length > 1) {
          companiesData[i]['district'] = dest[dest.length - 2].replace(/[0-9]+/g, '').trim()
        } else {
          companiesData[i]['district'] = dest[dest.length - 1].replace(/[0-9]+/g, '').trim()
        }

      }
      this.companiesData.push(companiesData[i])
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
          this.isLoad = false
          this.api.c('addFeaturedCompanies', result)
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

  getFeaturedCompanies() {

    if (this.user) {
      let data = {
        userid: this.user.user.id,
        token: this.user.token,
        service: 'get-featured-companies'
      }
      this.api.api(data).subscribe((result: any) => {
        this.api.c('getFeaturedCompanies', result)
        if (result.status) {

        } else {
          this.api.c('getFeaturedCompanies false', result)
        }
      },
        error => {
          this.api.c('Error getFeaturedCompanies', error)

        });
    }


  }

  share(companyid, name) {    

    const url = 'https://vaoperu.com/web/' + companyid
    const text = name
    this.socialSharing.share(text, document.title, null, url).then(_=>{
      this.general.saveEvent('share', companyid)
    })

  }


  toogleMenu() {
    this.api.c('toogleMenuFather', 'ok')
    this.eventsSubject.next();
  }

  deleteDuplicados(array) {

    let res = []
    for (let index = 0; index < array.length; index++) {
      const e = array[index];
      if (this.general.searchIndexByNameKey(res, 'id', e.id) === false) {

        e['distanceValue'] = 0;
        e['distance'] = '';

        res.push(e)
      }
    }

    return res

  }

  message(receptorid, companyDataID, phone1) {
    if(phone1){
      window.location.href = `https://api.whatsapp.com/send?phone=51${phone1}&text=Hola, necesito más información`
    }
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
