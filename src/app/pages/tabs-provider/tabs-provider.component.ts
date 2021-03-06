import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from "../../../environments/environment";
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-tabs-provider',
  templateUrl: './tabs-provider.component.html',
  styleUrls: ['./tabs-provider.component.scss'],
})
export class TabsProviderComponent implements OnInit {

  notifications: Number = 0;
  user: any;

  constructor(
    public router: Router, 
    private api: ApiService, 
    private general: GeneralService
    ) { }

  ngOnInit() {
    this.validateSession()
    this.getVersion()    
  }

  validateSession() {
    if (localStorage.getItem('ud')) {     
      this.user = JSON.parse(localStorage.getItem('ud'))
    }
  }

  getVersion(){
    this.api.api({
      service: 'get-version'
    }).subscribe((version: any) => {
      const os = this.general.detectOS();  
      if(version.version !== environment.version){
        if (os === 'Android') {
          this.general.info({
            title: 'Información',
            content: 'La aplicación tiene una nueva versión, actualice para continuar',
            type: 'redirect',
            data: 'https://play.google.com/store/apps/details?id=com.vaoperu.app'
          })          
        }
      }
      this.api.c('currentVersion', environment.version)
      this.api.c('getVreturn', version)
    })    
  }  
  

  

}
