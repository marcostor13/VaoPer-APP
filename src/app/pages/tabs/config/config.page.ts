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
  toogleAnuncio: any = false; 
  name: any = '';
  number: any = '';
  response: string = '';
  eventsSubject: Subject<void> = new Subject<void>();

  constructor(private router: Router, private api: ApiService, private cookie: CookieService) {
    
  }

  ngOnInit(): void {
    this.validateSession()
    this.getCategoriesAndSubcategories()
    
  }

  sendAnuncio(){
    this.isLoad = true;

    let data = {
      name: this.name,
      number: this.number,
      service: 'save-anuncio'
    }
    this.api.api(data).subscribe(result => {
      this.isLoad = false
      this.response = 'Gracias, nos contactaremos en breve'
      this.name = ''
      this.number = ''
      this.api.c('sendAnuncio result', result)      
    },
      error => {
        this.api.c('Error sendAnuncio', error)
      });
  }

  toogle(){
    this.toogleAnuncio = this.toogleAnuncio ? false: true
  }

  validateSession() {
    if (localStorage.getItem('ud')) {
      this.user = JSON.parse(localStorage.getItem('ud'))
      this.getDataUSerById()
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

  getDataUSerById() {

    this.isLoad = true;

    let data = {
      service: 'get-data-user-by-id',
      userid: this.user.user.id,
      token: this.user.token
    }

    this.api.api(data).subscribe((result:any) => {
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
      setTimeout(_=>{
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

  toogleMenu() {
    this.api.c('toogleMenuFather', 'ok')
    this.eventsSubject.next();
  }





}
