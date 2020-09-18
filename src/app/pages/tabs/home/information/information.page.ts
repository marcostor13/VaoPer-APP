import { Component, OnInit, Input, Renderer2, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import {DOCUMENT} from '@angular/common';
import { Plugins } from '@capacitor/core';
const { Geolocation, Network } = Plugins;

declare var google;

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  

  isLoad: Boolean = true
  companyData: any = {}
  id: any;
  user: any

  public map: any;
  public markers: any[] = [];
  private mapsLoaded: boolean = false;
  private networkHandler = null;
  apiKey: String = 'AIzaSyCB0ybbsuPrkmUgezCdsyNFpyZyyyGQDqM'

  lat: any = -77.0008672;
  lng: any = -12.1425035;

  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService, private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private _document) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getCompanyDataByID()
    this.validateSession()
    
  }


  validateSession() {

    if (localStorage.getItem('ud')) {
      this.user = JSON.parse(localStorage.getItem('ud'))     
    }
  }

  private init(): Promise<any> {

      return new Promise((resolve, reject) => {

          this.loadSDK().then((res) => {

              this.initMap().then((res) => {
                  resolve(true);
              }, (err) => {
                  reject(err);
              });

          }, (err) => {

              reject(err);

          });

      });

  }

  private loadSDK(): Promise<any> {

      console.log("Loading Google Maps SDK");

      return new Promise((resolve, reject) => {

          if(!this.mapsLoaded){

              Network.getStatus().then((status) => {

                  if(status.connected){

                      this.injectSDK().then((res) => {
                          resolve(true);
                      }, (err) => {
                          reject(err);
                      });

                  } else {

                      if(this.networkHandler == null){

                          this.networkHandler = Network.addListener('networkStatusChange', (status) => {

                              if(status.connected){

                                  this.networkHandler.remove();

                                  this.init().then((res) => {
                                      console.log("Google Maps ready.")
                                  }, (err) => {    
                                      console.log(err);
                                  });

                              }

                          });

                      }

                      reject('Not online');
                  }

              }, (err) => {

                  // NOTE: navigator.onLine temporarily required until Network plugin has web implementation
                  if(navigator.onLine){

                      this.injectSDK().then((res) => {
                          resolve(true);
                      }, (err) => {
                          reject(err);
                      });

                  } else {
                      reject('Not online');
                  }

              });

          } else {
              reject('SDK already loaded');
          }

      });


  }

  private injectSDK(): Promise<any> {

      return new Promise((resolve, reject) => {

          window['mapInit'] = () => {
              this.mapsLoaded = true;
              resolve(true);
          }

          let script = this.renderer.createElement('script');
          script.id = 'googleMaps';

          if(this.apiKey){
              script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&libraries=places&callback=mapInit';
          } else {
              script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';       
          }

          this.renderer.appendChild(this._document.body, script);

      });

  }

  

  back() {
    window.history.back()
  }

  getCompanyDataByID() {
    let data = {
      companyid: this.id,
      service: 'get-company-data-by-id'
    }
    this.api.api(data).subscribe(result => {
      this.api.c('getCompanyDataByID', result)
      this.companyData = result
      this.isLoad = false


      //CARGA DE GOOGLE MAPS      
      this.init().then((res) => {
          console.log("Google Maps ready.")
      }, (err) => {    
          console.log(err);
      });
    },
      error => {
        this.api.c('Error getCompanyDataByID', error)

      });
  }



  private initMap(): Promise<any> {

    if (this.companyData.address1 && this.companyData.address1 != '') {

      var infowindow;
      var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -77.0008672, lng: -12.1425035 },
        zoom: 15
      });
      var request = {
        query: this.companyData.address1,
        fields: ['geometry'],
      };
      var service = new google.maps.places.PlacesService(map);
      return new Promise(() => {
        service.findPlaceFromQuery(request, results => {


          // this.api.c('showmap res', results[0].geometry.location.lat())
          // alert(results[0].geometry.location.lat())

          this.lat = results[0].geometry.location.lat()
          this.lng = results[0].geometry.location.lng()

          if (results){
            map.setCenter(results[0].geometry.location);
  
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
  
            google.maps.event.addListener(marker, 'click', function () {
              infowindow.setContent(results[0].name);
              infowindow.open(map, this);
            });
          }
        })
      });

    }

  }


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


  red(url){

    if(url.indexOf('http') === -1){
      window.location.href = 'http://'+ url
    }else{
      window.location.href = url
    }

   
  }



}
