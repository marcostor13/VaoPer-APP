import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { environment } from "../../environments/environment";


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
    this.api.api({
      service: 'get-version'
    }).subscribe((version: any) => {
      console.log('currentVersion', environment.version)
      console.log('getVersion', version)
      return false;
    })
    return true;
    
  }


  
}
