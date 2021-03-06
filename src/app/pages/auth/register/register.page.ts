import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email:String = '';
  password:String = '';
  name:String = '';
  response: any = ''
  isLogged: Boolean = false
  isPassword: Boolean = true
  user: SocialUser;
  loggedIn: boolean;
  terminos: Boolean = false


  constructor(private router: Router, private apiService: ApiService, private cookie: CookieService, private authService: SocialAuthService) {

  }

  ngOnInit(): void {
    this.verifySession();
    this.loginWithSocial()
  }

  loginWithSocial() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.apiService.c('USER GOOGLE', this.user)

      if (this.user.provider == 'GOOGLE') {

        this.response = 'Procesando...'
        let data = {
          name: this.user.firstName,
          email: this.user.email,
          password: this.user.id + this.user.email.split('@')[0],
          role_id: 3,
          service: 'register'
        }
        this.apiService.api(data).subscribe((result: any) => {

          if (result.success) {
            localStorage.setItem('ud', JSON.stringify(result))
            if (result.user.role_id == 2) {
              window.location.href = '/tabs-provider'
              // this.router.navigate(['/tabs-provider']);
            } else {
              window.location.href = '/tabs'
              // this.router.navigate(['/tabs']);
            }
          } else {
            this.response = result.message
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
    });
  }

  verifySession() {
    // if (localStorage.getItem('ud') != '') {
    //   this.isLogged = true;
    //   this.router.navigate(['/tabs']);
    // }
  }

  onRegister(): void {
    

    this.response = 'Procesando...'

    if (this.terminos){

      if (this.name.trim() !== '' && this.email.trim() !== '' || this.password.trim() !== ''){
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
          role_id: 3,
          service: 'register'
        }
        this.apiService.api(data).subscribe((result:any) => {
          if (result.success) {
            localStorage.setItem('ud', JSON.stringify(result))
            if (result.user.role_id == 2) {
              window.location.href = '/tabs-provider'
            } else {
              window.location.href = '/tabs'
            }
          }else{
            this.response = result.message
          }
  
        },
          error => {
            if (error.status == 401) {
              this.response = 'Error en el correo o contraseña'
            } else {
              this.response = JSON.stringify(error);
            }  
          });
      }else{
        this.response = 'Debe completar todos los campos'
      }

    }else{
      this.response = 'Debe aceptar los términos y condiciones'
    }


  }

  eye() {
    if (this.isPassword) {
      this.isPassword = false
    } else {
      this.isPassword = true
    }
  }

  signInWithGoogle(): void {
    if (!this.terminos) {
      this.response = 'Debe aceptar los términos y condiciones'
    } else {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
  }

  signInWithFB(): void {
    if (!this.terminos) {
      this.response = 'Debe aceptar los términos y condiciones'
    } else {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

  }

  signOut(): void {
    this.authService.signOut();
  }

}

