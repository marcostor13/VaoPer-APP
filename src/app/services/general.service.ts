import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  user: any;

  constructor(public api: ApiService, public cookie: CookieService) {
    if (localStorage.getItem('ud') && localStorage.getItem('ud') != '') {
      this.user = JSON.parse(localStorage.getItem('ud'))
    }

    moment.locale("es");
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
    return 'https://api.vaoperu.com/' + type + '/'
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
        ga: JSON.stringify([{ga: 'mobile'}]),
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

  apertura(start, end) {
    let today = moment().format('YYYY-MM-DD');
    let betweenStart = today + ' ' + start;
    let betweenEnd = today + ' ' + end;
    let time = moment().isBetween(betweenStart, betweenEnd)
    return time
  }



}
