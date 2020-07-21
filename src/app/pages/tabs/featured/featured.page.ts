import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { Subject } from 'rxjs';
import { Plugins } from '@capacitor/core';
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

  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService) {
   
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
    this.getCompaniesDataFeatured()
    this.getCategoriesAndSubcategories()
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
    if (this.cookie.get('ud') && this.cookie.get('ud') != '') {
      this.user = JSON.parse(this.cookie.get('ud'))
      this.api.c('user', this.user)
      if (this.user.user.role === "proveedor") {
        this.router.navigate(['/provider'])
      }
    } else {
      this.router.navigate(['/login'])
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
      this.api.api(data).subscribe((result: any) => {
        this.api.c('getCompaniesDataFeatured', result)
        if (result.status) {

          if (result.data.length > 0) {
            this.getCurrentPosition(result.data)
          } else {
            this.response = 'No tiene negocios favoritos'
            this.isLoad = false
          }

        } else {
          this.api.c('getCompaniesDataFeatured false', result)
        }
      },
        error => {
          this.api.c('Error getCompaniesDataFeatured', error)

        });
    }
  }

  getUriImage(image) {
    return encodeURI(image)
  }


  getCurrentPosition(companiesData) {
    this.general.getPosition().then(pos => {
      this.api.c('Position', `${pos.lng} ${pos.lat}`)
      this.currentPosition = {
        lat: pos.lat,
        lng: pos.lng
      }
      this.getDistances(companiesData)
    });
  }

  getDistances(companiesData) {

    for (let i = 0; i < companiesData.length; i++) {
      const element = companiesData[i]
      this.api.c('getDistances', element)
      if (element.address1) {
        var place = element.address1
        this.getPositionByString(place, i, companiesData.length, companiesData)
      }
    }

  }



  getPositionByString(place, i, arrayLength, companiesData) {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -77.0008672, lng: -12.1425035 },
      zoom: 15
    });
    var request = {
      query: place,
      fields: ['name', 'geometry'],
    };
    var service = new google.maps.places.PlacesService(map);
    return new Promise(() => {
      service.findPlaceFromQuery(request, results => {
        this.api.c('getPositionByString Lat', results[0].geometry.location.lat())
        this.api.c('getPositionByString Lng', results[0].geometry.location.lng())
        var destinationPosition = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
        this.getDistance(destinationPosition, i, arrayLength, companiesData)
      })
    });

  }


  getDistance(destinationPosition, i, arrayLength, companiesData) {

    return new Promise(() => {
      this.service.getDistanceMatrix({
        origins: [this.currentPosition],
        destinations: [destinationPosition],
        travelMode: google.maps.TravelMode['DRIVING'],
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, response => {
        companiesData[i]['distance'] = response.rows[0].elements[0].distance.text
        companiesData[i]['distanceValue'] = response.rows[0].elements[0].distance.value
        this.api.c('getDistance res', response.rows[0].elements[0].distance.text)
        this.api.c('getDistance arrayLength', arrayLength)
        this.api.c('getDistance i', i)
        if (i + 1 == arrayLength) {
          this.companiesData = companiesData.sort(function (a, b) {
            if (a['distanceValue'] > b['distanceValue']) {
              return 1;
            }
            if (a['distanceValue'] < b['distanceValue']) {
              return -1;
            }
            return 0;
          });
          this.isLoad = false
        }
      })
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


  share() {

    let newVariable = (window.navigator as any)
    if (newVariable.share) {
      newVariable.share({
        title: document.title,
        text: "Vaoperu.pe",
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      this.api.c('Share', 'No soportado')
    }



  }

  toogleMenu() {
    this.api.c('toogleMenuFather', 'ok')
    this.eventsSubject.next();
  }

  message(receptorid, companyDataID) {

    if (!this.user) {
      this.router.navigate(['/login'])
    } else {
      if (this.user.user.id != receptorid) {

        if (this.createChat(this.user.user.id, receptorid)) {
          this.router.navigate(['/chat-provider/' + receptorid])
        }

      }
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
