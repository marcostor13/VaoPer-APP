import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { Observable, Subject } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ElementRef, Renderer2 } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

const { Geolocation, Network } = Plugins;

declare var google;

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  @ViewChild('map') el: ElementRef;
  @Input() stateMenu: Observable<void>;
  eventsSubject: Subject<void> = new Subject<void>();

  id: any;
  //USER
  user: any;
  urlBackEnd: any = this.general.getUrlImages('profile');
  companiesData: any = [];
  companiesData2: any;
  isLoad: Boolean = true
  service2;
  search: any = ''
  response: any = false
  categories: any;

  


  //POSITION

  currentPosition: any = {}

  districts: any = []
  companiesDataTemp: any;
  valid:Boolean = false

  listOptionsDistrict: Array<any> = [
    'ANCON',
    'ATE',
    'BARRANCO',
    'BREÑA',
    'CARABAYLLO',
    'CHACLACAYO',
    'CHORRILLOS',
    'CIENEGUILLA',
    'COMAS',
    'EL AGUSTINO',
    'INDEPENDENCIA',
    'JESUS MARIA',
    'LA MOLINA',
    'LA VICTORIA',
    'LIMA',
    'LINCE',
    'LOS OLIVOS',
    'LURIGANCHO',
    'LURIN',
    'MAGDALENA DEL MAR',
    'MIRAFLORES',
    'PACHACAMAC',
    'PUCUSANA',
    'PUEBLO LIBRE',
    'PUENTE PIEDRA',
    'PUNTA HERMOSA',
    'PUNTA NEGRA',
    'RIMAC',
    'SAN BARTOLO',
    'SAN BORJA',
    'SAN ISIDRO',
    'SAN JUAN DE LURIGANCHO',
    'SAN JUAN DE MIRAFLORES',
    'SAN LUIS',
    'SAN MARTIN DE PORRES',
    'SAN MIGUEL',
    'SANTA ANITA',
    'SANTA MARIA DEL MAR',
    'SANTA ROSA',
    'SANTIAGO DE SURCO',
    'SURQUILLO',
    'VILLA EL SALVADOR',
    'VILLA MARIA DEL TRIUNFO',
  ]

  constructor(
    public route: ActivatedRoute, 
    private router: Router, 
    private api: ApiService, 
    private cookie: CookieService, 
    public general: GeneralService, 
    private socialSharing: SocialSharing,
    private modal: NzModalService
    ) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.validateSession()    
  }

  ngAfterViewInit() {

    this.service2 = new google.maps.places.PlacesService(
      new google.maps.Map(this.el.nativeElement, {
        center: new google.maps.LatLng(-12.0202343, -77.0502994),
        zoom: 15,
      })
    )

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
    this.api.api(data).subscribe(async (result: any) => {     
      if (result.status) {
        if (result.data.length > 0) {
          this.companiesData = await this.getCurrentPosition(this.deleteDuplicados(result.data))    
          this.isLoad = false   
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
    return this.general.getPosition()
      .then((currentPosition: any) => {
        if (currentPosition) {
          for (const element of companiesData) {          
            if (element.lat) {
              element['distance'] = parseFloat(this.getKilometros(element.lat, element.lng, currentPosition.lat, currentPosition.lng))
            } else {
              element['distance'] = 1000000
            }
            newCompaniesData.push(element)
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

      })
      .catch((error: any) => {

        this.error(error)

        this.api.c('CurrentPosition Error', error)


      })

  }

  error(content): void {
    this.modal.error({
      nzTitle: 'Advertencia',
      nzContent: content,
      nzOkText: 'Aceptar',
    });
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
      window.location.href = `https://api.whatsapp.com/send?phone=51${phone1}&text=Hola, soy usuario VAO`
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


  issetDistrict(district) {
    let res = false
    this.districts.forEach(d => {
      if (d == district) {
        res = true
      }
    });
    return res
  }


  onDistrictChange() {

    this.isLoad = true

    if (this.valid === false) {
      this.companiesDataTemp = this.companiesData
      this.valid = true
    }

    let newCompaniesData = []

    if (this.districts.length === 0) {
      this.companiesData = this.companiesDataTemp
      this.isLoad = false
    } else {
      this.companiesDataTemp.forEach(d => {
        if (this.issetDistrict(d.district)) {
          newCompaniesData.push(d)
        }
      });
      this.isLoad = false
      this.companiesData = newCompaniesData
    }


  }





}
