import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  user: any;
  userimage: any = "/assets/img/partials/user.svg"
  isDesktop: any;
  isLoad: any = false
  categories: any;

  eventsSubject: Subject<void> = new Subject<void>();

  constructor(private router: Router, private api: ApiService, private cookie: CookieService) {
    
  }

  ngOnInit(): void {
    this.validateSession()
    this.getCategoriesAndSubcategories()
  }

  validateSession() {
    if (this.cookie.get('ud') && this.cookie.get('ud') != '') {
      this.user = JSON.parse(this.cookie.get('ud'))
      this.api.c('user', this.user)
      if (this.user.user.role === 'proveedor') {
        this.router.navigate(['/proveedor'])
      }
    }
  }

  getCategoriesAndSubcategories() {

    this.isLoad = true;

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

  logout() {
    let data = {
      userid: this.user.user.id,
      token: this.user.token,
      service: 'logout'
    }
    this.api.api(data).subscribe(result => {
      this.cookie.set('ud', '')
      this.router.navigate(['/login'])
    },
      error => {
        this.api.c('Error logout', error)
        if (error.status == 401) {
          this.cookie.set('ud', '')
          this.router.navigate(['/login'])
        }

      });
  }

  toogleMenu() {
    this.api.c('toogleMenuFather', 'ok')
    this.eventsSubject.next();
  }





}
