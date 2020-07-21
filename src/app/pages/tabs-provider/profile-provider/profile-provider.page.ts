import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.page.html',
  styleUrls: ['./profile-provider.page.scss'],
})
export class ProfileProviderPage implements OnInit {

  user: any;
  companyData: any;
  urlBackEnd: any = this.general.getUrlImages('profile');
  productsSection: any = false
  featuredSection: any = false
  offersSection: any = false
  isLoad: Boolean = false


  constructor(private router: Router, private api: ApiService, private cookie: CookieService, public general: GeneralService) {
    
  }

  ngOnInit(): void {
    this.validateSession()
    this.getCompanyData()
    this.getSections()
  }

  validateSession() {
    this.user = JSON.parse(this.cookie.get('ud'))
    this.api.c('user', this.user)
    if (this.user.user.role !== 'proveedor' && this.user.user.role !== 'admin') {
      this.router.navigate(['/'])
    }
  }

  getCompanyData() {

    this.isLoad = true

    let data = {
      userid: this.user.user.id,
      token: this.user.token,
      service: 'get-company-data'
    }
    this.api.api(data).subscribe(result => {
      this.api.c('getCompanyData', result)
      this.isLoad = false
      this.companyData = result
    },
      error => {
        this.api.c('Error getCompanyData', error)

      });
  }

  getSections() {
    this.isLoad = true
    let data = {
      userid: this.user.user.id,
      token: this.user.token,
      service: 'get-sections'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('getSections', result)
      this.isLoad = false
      if (result.status) {
        if (result.data.products == 1) {
          this.productsSection = true
        }
        if (result.data.featured == 1) {
          this.featuredSection = true
        }
        if (result.data.offers == 1) {
          this.offersSection = true
        }
      }
    },
      error => {
        this.api.c('Error getSections', error)

      });
  }

  onChangeSections() {
    this.isLoad = true
    let data = {
      userid: this.user.user.id,
      token: this.user.token,
      products: this.productsSection,
      featured: this.featuredSection,
      offers: this.offersSection,
      service: 'save-sections'
    }
    this.api.api(data).subscribe((result: any) => {
      this.isLoad = false
      this.api.c('saveSections', result)
    },
      error => {
        this.api.c('Error saveSections', error)

      });
  }

  getUriImage(image) {
    return encodeURI(image)
  }


}
