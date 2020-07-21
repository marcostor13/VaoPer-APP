import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

import * as moment from 'moment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: any;
  userimage: any = "/assets/img/partials/user.svg"


  multi: any[] = []
  view: any[] = [350, 350]

  isDesktop: any;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Population';
  animations: boolean = true;
  startDate: any = moment().format('YYYY-MM-DD');
  endDate: any = moment().add(7, 'days').format('YYYY-MM-DD');


  call: any = 0
  share: any = 0
  featured: any = 0
  visit: any = 0
  message: any = 0

  colorScheme = {
    domain: ['#13bf9e', '#ffe266', '#333333']
  };

  constructor(private router: Router, private api: ApiService, private cookie: CookieService) {  


    Object.assign(this.multi);
  }

  ngOnInit(): void {
    this.validateSession()
    this.getReportProvider()

    if (this.isDesktop) {
      this.view = [700, 350]
    }
  }

  validateSession() {
    if (this.cookie.get('ud') && this.cookie.get('ud') != '') {
      this.user = JSON.parse(this.cookie.get('ud'))
      this.api.c('user', this.user)
      this.getImageProfile()
      if (this.user.user.role !== 'proveedor' && this.user.user.role !== 'admin') {
        this.router.navigate(['/'])
      }
    } else {
      this.router.navigate(['/login'])
    }

  }

  getReportProvider() {
    let data = {
      token: this.user.token,
      userid: this.user.user.id,
      startDate: this.startDate,
      endDate: this.endDate,
      service: 'get-report-provider'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('getReportProvider', result)

      if (result.status) {
        this.multi = result.data.visitsByDay
        this.call = result.data.call
        this.share = result.data.share
        this.featured = result.data.featured
        this.visit = result.data.visit
        this.message = result.data.message

      } else {
        this.api.c('getReportProvider false', result)
      }

    },
      error => {
        this.api.c('Error getReportProvider', error)

      });
  }

  onSelect(event) {

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
      });
  }








}
