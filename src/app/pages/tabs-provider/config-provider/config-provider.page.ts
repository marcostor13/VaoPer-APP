import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-config-provider',
  templateUrl: './config-provider.page.html',
  styleUrls: ['./config-provider.page.scss'],
})
export class ConfigProviderPage implements OnInit {

  user: any;
  userimage: any = "/assets/img/partials/user.svg"
  isLoad: any = false

  constructor(private router: Router, private api: ApiService, private cookie: CookieService) {
  }

  ngOnInit(): void {
    this.validateSession()
    this.getDataUSerById()
  }

  validateSession() {
    if (localStorage.getItem('ud')){
      this.user = JSON.parse(localStorage.getItem('ud'))
    }
    this.getImageProfile()
  }

  getDataUSerById() {

    this.isLoad = true;

    let data = {
      service: 'get-data-user-by-id',
      userid: this.user.user.id,
      token: this.user.token
    }

    this.api.api(data).subscribe((result: any) => {
      this.api.c('getDataUSerById', result)
      this.userimage = result.imageprofile
      this.isLoad = false
    },
      error => {
        this.api.c('Error getDataUSerById', error)
      });

  }

  logout() {
    this.isLoad = true

    let data = {
      userid: this.user.user.id,
      token: this.user.token,
      service: 'logout'
    }
    this.api.api(data).subscribe(result => {
      localStorage.removeItem('ud')
      setTimeout(_ => {
        this.isLoad = false
        this.router.navigate(['/login'])
      }, 1000)
    },
      error => {
        this.api.c('Error logout', error)
        if (error.status == 401) {
          localStorage.removeItem('ud')
          this.router.navigate(['/login'])
        }

      });
  }

  getImageProfile() {
    let data = {
      service: 'get-image-profile',
      token: this.user.token,
      userid: this.user.user.id
    }
    this.api.api(data).subscribe((res: any) => {
      this.api.c('getImageProfile result', res)
      if (res.status) {
        if (res.data && res.data != 'null') {
          this.userimage = res.data
        }
      }
    },
      error => {
        this.api.c('Error getImageProfile', error)
        if (error.error.message === 'Token has expired'){
          localStorage.removeItem('ud');
          this.router.navigate(['/auth/login']);
        }
      });
  }

}
