import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { Subject } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// import { } from '@types/googlemaps';


const { Geolocation, Network } = Plugins;

declare var google;

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})

export class FeaturedPage implements OnInit {

  eventsSubject: Subject<void> = new Subject<void>();

  user: any;
  urlBackEnd: any = this.general.getUrlImages('profile');
  companiesData: Array<any> = []
  isLoad: Boolean = true
  service = new google.maps.DistanceMatrixService;
  search: any = ''
  response: any = false
  categories: any;

  //POSITION

  currentPosition: any = {}

  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService, private socialSharing: SocialSharing,) {
   
  }

  back() {
    window.history.back()
  }

  searchEvent() {
    this.router.navigate(['/results/' + this.search]).then(() => {
      window.location.reload();
    });

  }

  ngOnInit(): void {
    this.validateSession()   
    this.getCategoriesAndSubcategories()
  }

  ionViewWillEnter(){
    this.getCompaniesDataFeatured()
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

  validateSession() {
    if (localStorage.getItem('ud')) {
      this.user = JSON.parse(localStorage.getItem('ud'))     
    } else {
      window.location.href='/login'    
    }
  }

  getCompaniesDataFeatured() {
    if (this.user) {
      this.isLoad = true
      this.companiesData = []
      let data = {
        userid: this.user.user.id,
        token: this.user.token,
        service: 'get-companies-data-featured'
      }
      this.api.api(data).subscribe(async (result: any) => {
        this.api.c('getCompaniesDataFeatured', result)
        if (result.status) {

          if (result.data.length > 0) {
            this.response = ''
            this.isLoad = false
            this.companiesData = await this.getCurrentPosition(result.data)
            // this.getCurrentPosition(result.data)
          } else {
            this.response = 'No tiene negocios favoritos'
            this.isLoad = false
          }

        } else {
          this.api.c('getCompaniesDataFeatured false', result)
        }
      },
        error => {
          if(error.status == 401){
            alert('Su sesión ha vencido');
            this.router.navigate(['/login'])          
          }
          this.api.c('Error getCompaniesDataFeatured', error)

        });
    }
  }

  getUriImage(image) {
    return encodeURI(image)
  }


  rad(x) {
    return x * Math.PI / 180;
  }

  getKilometros(lat1, lon1, lat2, lon2) {
    var R = 6378.137; //Radio de la tierra en km
    var dLat = this.rad(lat2 - lat1);
    var dLong = this.rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.rad(lat1)) * Math.cos(this.rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(1); //Retorna un decimales
  }


  async getCurrentPosition(companiesData) {

    let newCompaniesData: any = []
    const currentPosition = await this.general.getPosition()

    if (currentPosition) {
      for (const element of companiesData) {
        this.api.c('Element', element)
        if (element.lat) {
          element['distance'] = parseFloat(this.getKilometros(element.lat, element.lng, currentPosition.lat, currentPosition.lng))
        } else {
          element['distance'] = 1000000
        }
        newCompaniesData.push(element)
      }
    }

    newCompaniesData = newCompaniesData.sort(function (a, b) {
      if (a['distance'] > b['distance']) {
        return 1;
      }
      if (a['distance'] < b['distance']) {
        return -1;
      }
      return 0;
    })
    return newCompaniesData

  }


  updateCoordinates(lat, lng, companyid) {

    let data = {
      token: this.user.token,
      companyid: companyid,
      service: 'update-coordinates',
      lat: lat,
      lng: lng,
    }
    this.api.api(data).subscribe((result: any) => {
      this.isLoad = false
      this.api.c('addFeaturedCompanies', result)
    },
      error => {
        this.api.c('Error addFeaturedCompanies', error)

      });

  }


  addFeaturedCompanies(companyid, e: any) {

    let data = {
      userid: this.user.user.id,
      token: this.user.token,
      companyid: companyid,
      service: 'add-featured-companies'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('addFeaturedCompanies', result)
      if (result.status) {
        this.api.c('addFeaturedCompanies true', e.target.disabled)
        e.target.src = '/assets/img/partials/star-g.svg';
      } else {
        this.api.c('addFeaturedCompanies false', result)
      }
    },
      error => {
        
        this.api.c('Error addFeaturedCompanies', error)

      });

  }

  deleteFeaturedCompanies(featuredid) {

    this.isLoad = true

    let data = {
      token: this.user.token,
      featuredid: featuredid,
      service: 'delete-featured-companies'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('deleteFeaturedCompanies', result)
      this.isLoad = false
      if (result.status) {
        this.getCompaniesDataFeatured()
      } else {
        this.api.c('deleteFeaturedCompanies false', result)
      }
    },
      error => {
        
        this.api.c('Error deleteFeaturedCompanies', error)
        

      });

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
