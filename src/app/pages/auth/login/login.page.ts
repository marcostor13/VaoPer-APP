import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: String = ''
  password: String = ''
  response: any = ''
  isLogged: Boolean = false
  isPassword: Boolean = true
  loggedIn: boolean;
  terminos: Boolean = false
  username: string;
  picture;
  name;

  isVisible = false;
  isConfirmLoading = false;


  step2: boolean = false
  emailremenber: String = ''
  responseModal: String = ''

  constructor(
    private router: Router, 
    private api: ApiService, 
    private cookie: CookieService, 
    ) {


    router.events
      .pipe(       
        filter(
          (event: NavigationEvent) => {
            return (event instanceof NavigationStart);
          }
        )
      )
      .subscribe(
          (event: NavigationStart) => {

            this.router.navigate(['/tabs'])

          }
        )
  }

  ngOnInit(): void {
    // this.verifySession();
    
  }
  
  verifySession() {
    if (localStorage.getItem('ud') != '') {
      this.isLogged = true;
      this.router.navigate(['/tabs']);
    }
  }

  onLogin(): void {

    this.response = 'Procesando...'
    let data = {
      email: this.email,
      password: this.password,
      service: 'login'
    }
    this.api.api(data).subscribe((result:any) => {

      localStorage.setItem('ud', JSON.stringify(result))
      // this.cookie.set('ud', JSON.stringify(result));

      if(result.user.role_id == 2){
        window.location.href ='/tabs-provider'
        // this.router.navigate(['/tabs-provider']);
      }else{
        window.location.href = '/tabs'
        // this.router.navigate(['/tabs']);
      }

    },
    error => {
      if (error.status == 401) {
        this.response = 'Error en el correo o contraseña'
      } else {
        this.response = JSON.stringify(error);
      }
    });

  }

  eye() {
    if (this.isPassword) {
      this.isPassword = false
    } else {
      this.isPassword = true
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    this.sendMail()

  }

  handleCancel(): void {
    this.isVisible = false;
  }

  sendMail() {

    let data = {
      email: this.emailremenber,
      linkredirect: 'http://vaoperu.com/auth/resetpassword/',
      service: 'resetpassword'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('Result mail', result)
      if (result.status) {
        this.step2 = true
        this.responseModal = 'Se envío un mensaje a su correo, para la recuperación de su contraseña'
      } else {
        this.isConfirmLoading = false;
        this.step2 = true
        if (result.statuscode == 301) {
          this.responseModal = 'El email no existe'
        } else {
          this.api.c('Result mail false', result)
        }
      }
    },
      error => {
        this.api.c('Result mailError', error)

      });

  }



}
