import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';


// const { Geolocation, Network } = Plugins;

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

  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService) {
    this.id = this.route.snapshot.paramMap.get('id')
  }


  validateSession() {

    if (this.cookie.get('ud') && this.cookie.get('ud') != '') {
      this.user = JSON.parse(this.cookie.get('ud'))
      this.api.c('user', this.user)
      if (this.user.user.role === "proveedor") {
        this.router.navigate(['/provider'])
      }
    }
  }

  ngOnInit(): void {
    this.getCompanyDataByID()
    this.validateSession()
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
      this.showmap()
    },
      error => {
        this.api.c('Error getCompanyDataByID', error)

      });
  }

  showmap() {

    if (this.companyData.address1) {

      this.api.c('div', document.getElementById('map'))

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
          this.api.c('getPositionByString Lat', results[0].geometry.location.lat())
          this.api.c('getPositionByString Lng', results[0].geometry.location.lng())
          map.setCenter(results[0].geometry.location);

          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });

          google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(results[0].name);
            infowindow.open(map, this);
          });


        })


      });

    }

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
