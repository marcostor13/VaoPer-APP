import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {CookieService} from 'ngx-cookie-service';

import * as moment from 'moment';
import {NzModalService} from 'ng-zorro-antd/modal';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';

import {Plugins} from '@capacitor/core';

const {Geolocation} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  user: any;

  constructor(public api: ApiService,
              public cookie: CookieService,
              private modal: NzModalService,
              private router: Router,
              private platform: Platform) {
    if (localStorage.getItem('ud') && localStorage.getItem('ud') != '') {
      this.user = JSON.parse(localStorage.getItem('ud'));
    }

    moment.locale('es');
  }

  httpBuildQuery(params) {
    if (typeof params === 'undefined' || typeof params !== 'object') {
      params = {};
      return params;
    }

    let query = '?';
    let index = 0;

    for (const i in params) {
      index++;
      const param = i;
      const value = params[i];
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
        return element;
      }
    }
  }

  searchIndexByNameKey(array, key, value) {
    let res: any = false;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element[key] == value) {
        res = i;
      }
    }

    return res;
  }

  getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  getUrlImages(type) {
    return 'https://api.vaoperu.com/' + type + '/';
  }

  getPosition(): Promise<any> {

    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };

    return new Promise((resolve, reject) => {
      if (this.platform.is('ios')) {
        try {
          Geolocation.watchPosition(options, (resp, err) => {
            console.log('Res navigator', resp);
            resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          });
        } catch (err) {
          reject('Para ubicar negocios por distancia, activa tu GPS');
        }
      } else {
        navigator.geolocation.watchPosition(resp => {
            console.log('Res navigator', resp);
            resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          },
          err => {
            reject('Para ubicar negocios por distancia, activa tu GPS');
          }, options);
      }
    });
  }


  saveEvent(type: any, companyid) {
    this.api.c('Navigator', navigator);

    if (this.user) {
      const data = {
        type,
        companyid,
        description: '',
        userid: this.user.user.id,
        token: this.user.token,
        ga: JSON.stringify(navigator),
        service: 'save-event'
      };
      this.api.api(data).subscribe((result: any) => {
          this.api.c('saveEvent', result);
        },
        error => {
          this.api.c('Error saveEvent', error);
        });
    } else {
      const data = {
        type,
        companyid,
        description: '',
        userid: '0',
        ga: JSON.stringify(navigator),
        service: 'save-event'
      };
      this.api.api(data).subscribe((result: any) => {
          this.api.c('saveEvent', result);
        },
        error => {
          this.api.c('Error saveEvent', error);
        });
    }


  }

  apertura(start, end) {
    const today = moment().format('YYYY-MM-DD');
    const betweenStart = today + ' ' + start;
    const betweenEnd = today + ' ' + end;
    const time = moment().isBetween(betweenStart, betweenEnd);
    return time;
  }

  formatURL(srt) {
    const normalize = (function() {
      const from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç`"´',
        to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc  ',
        mapping = {};

      for (let i = 0, j = from.length; i < j; i++) {
        mapping[from.charAt(i)] = to.charAt(i);
      }

      return function(str) {
        const ret = [];
        for (let i = 0, j = str.length; i < j; i++) {
          const c = str.charAt(i);
          if (mapping.hasOwnProperty(str.charAt(i))) {
            ret.push(mapping[c]);
          } else {
            ret.push(c);
          }
        }
        return ret.join('');
      };

    })();

    return normalize(srt).replace(/\s/g, '-').toLowerCase();

  }

  detectOS() {
    if (navigator.userAgent.indexOf('Android') > -1) {
      return 'Android';
    } else if (navigator.userAgent.indexOf('iPhone') > -1) {
      return 'iPhone';
    } else {
      return 'Other';
    }
  }


  private action(type: string, data: any) {
    switch (type) {
      case 'redirect':
        if (data.indexOf('http') > -1) {
          window.location.href = data;
        } else {
          this.router.navigate([data]);
        }
        break;

      default:
        this.api.c('Action Service', type);
        break;
    }
  }


  info(data: any): void {
    this.modal.info({
      nzTitle: data.title,
      nzContent: data.content,
      nzOnOk: () => this.action(data.type, data.data)
    });
  }

  success(data: any): void {
    this.modal.success({
      nzTitle: data.title,
      nzContent: data.content
    });
  }

  error(data: any): void {
    this.modal.error({
      nzTitle: data.title,
      nzContent: data.content
    });
  }

  warning(data: any): void {
    this.modal.warning({
      nzTitle: data.title,
      nzContent: data.content
    });
  }


}
