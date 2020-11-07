import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';



@Injectable({
  providedIn: 'root'
})
export class StartGuard implements CanActivate {

  constructor(
    private api: ApiService
  ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.getCompaniesData()
    return true;
  }


  getCompaniesData(){
    this.api.api({
      search: '',
      service: 'get-companies-data'
    }).subscribe((companies:any)=>{
      this.api.setData(companies)
    })
  }




  
}
