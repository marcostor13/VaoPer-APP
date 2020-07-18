import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private router: Router, private api: ApiService, private cookie: CookieService) {

  }

  ngOnInit(): void {
    this.verifySession();
  }

  verifySession() {
    if (this.cookie.get('ud') != '') {
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
    this.api.api(data).subscribe(result => {
      this.cookie.set('ud', JSON.stringify(result));
      this.router.navigate(['/tabs']);
    },
      error => {
        if (error.status == 401) {
          this.response = 'Error en el correo o contraseña'
        } else {
          this.response = JSON.stringify(error);
        }

      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      });

  }

  eye() {
    if (this.isPassword) {
      this.isPassword = false
    } else {
      this.isPassword = true
    }
  }

}
