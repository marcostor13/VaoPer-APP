import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {

  @Output() state = new EventEmitter<string>();
  @Input() stateMenu: Observable<void>;

  //USER
  user: any;
  items: Array<any> = []
  categories: any;
  isLoad: Boolean = true
  companies: any = []
  subcategories: any = []
  visibleIndices = new Set<number>();
  search: String = ''

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  eventsSubject: Subject<void> = new Subject<void>();



  constructor(private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService) {
    this.items = [
      { src: '/assets/img/photos/photo1.jpg' },
      { src: '/assets/img/photos/photo2.jpg' },
      { src: '/assets/img/photos/photo3.jpg' },
    ]  
  }

  ngOnInit(): void {
    this.validateSession()
    this.getCategoriesAndSubcategories()
    this.getCompaniesData()
  }

  validateSession() {
    if (this.cookie.get('ud') && this.cookie.get('ud') != '') {
      this.user = JSON.parse(this.cookie.get('ud'))
      this.api.c('user', this.user)

      if (this.user.user.role === "proveedor") {
        this.router.navigate(['/dashboard'])
      }
    }else{
      this.router.navigate(['/login'])
    }

  }


  getCategoriesAndSubcategories() {

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


  toogleMenuHome() {
    this.api.c('toogleMenuFather2', this.eventsSubject)
    this.eventsSubject.next();
  }



  deleteDuplicados(array) {

    let res = []
    for (let index = 0; index < array.length; index++) {
      const e = array[index];
      if (this.general.searchIndexByNameKey(res, 'id', e.id) === false) {
        res.push(e)
      }
    }
    return res

  }



  getCompaniesData() {


    this.isLoad = true
    let data = {
      search: '',
      service: 'get-companies-data'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('getCompaniesData', result)
      if (result.status) {
        if (result.data.length > 0) {
          this.companies = this.deleteDuplicados(result.data)
        } else {
          this.api.c('getCompaniesData false', result)
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



  onclickOpenSubcategories(index, subcategories, category): void {

    if (subcategories === 0) {
      this.router.navigate(['/results/' + category])
    }

    if (!this.visibleIndices.delete(index)) {
      this.visibleIndices.add(index);
    }
  }

  getUriImage(image) {
    return encodeURI(image)
  }

  

  redirect(categoryid, categoryname) {
    //[routerLink] = "['/results/' + category.name]"
    let data = {
      categoryid: categoryid,
      service: 'get-subcategories'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('redirect result', result)
      if (result.length > 0) {
        this.subcategories = result
      } else {
        this.router.navigate(['/results/' + categoryname]).then(() => {
          window.location.reload();
        })
      }
    },
      error => {
        this.api.c('Error redirect', error)
      });


  }

  redireccionarSubcategory(subcategorySelect) {

    this.router.navigate(['/results/' + subcategorySelect]).then(() => {
      window.location.reload();
    })

  }


  redireccionar() {
    this.router.navigate(['/results/' + this.search]).then(() => {
      window.location.reload();
    })
    
  }  



}
