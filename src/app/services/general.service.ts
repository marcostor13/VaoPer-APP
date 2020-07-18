import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  user: any;

  constructor(public api: ApiService, public cookie: CookieService) {
    if (this.cookie.get('ud') && this.cookie.get('ud') != '') {
      this.user = JSON.parse(this.cookie.get('ud'))
    }
  }

  httpBuildQuery(params) {
    if (typeof params === 'undefined' || typeof params !== 'object') {
      params = {};
      return params;
    }

    var query = '?';
    var index = 0;

    for (var i in params) {
      index++;
      var param = i;
      var value = params[i];
      if (index == 1) {
        query += param + '=' + value;
      } else {

        query += '&' + param + '=' + value;
      }

    }
    return query;
  }

  searchElementByNameKey(array, key, value) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element[key] == value) {
        return element
      }
    }
  }

  searchIndexByNameKey(array, key, value) {
    var res: any = false;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element[key] == value) {
        res = i
      }
    }

    return res
  }

  getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  getUrlImages(type) {
    if (window.location.href.indexOf('104.155.156.43') > -1 || window.location.href.indexOf('vaoperu') > -1) {
      return 'https://api.vaoperu.com/' + type + '/'
    } else {
      return 'http://localhost:8000/' + type + '/'
    }

  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        console.log('Res navigator', resp)
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          console.log('Error navigatro', err)
          reject(err);
        });
    });
  }


  saveEvent(type: any, companyid) {


    if (this.user) {
      let data = {
        type: type,
        companyid: companyid,
        description: '',
        userid: this.user.user.id,
        token: this.user.token,
        ga: 'mobile',
        service: 'save-event'
      }
      this.api.api(data).subscribe((result: any) => {
        this.api.c('saveEvent', result)
      },
        error => {
          this.api.c('Error saveEvent', error)
        });
    } else {
      let data = {
        type: type,
        companyid: companyid,
        description: '',
        userid: '0',
        ga: 'mobile',
        service: 'save-event'
      }
      this.api.api(data).subscribe((result: any) => {
        this.api.c('saveEvent', result)
      },
        error => {
          this.api.c('Error saveEvent', error)
        });
    }


  }



}
