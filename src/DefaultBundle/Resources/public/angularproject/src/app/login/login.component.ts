import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';


@Component({
  selector: 'my-app',
  templateUrl: './login.component.html',
  providers: [LoginService]
})

export class LoginComponent {

  loginForm;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {

    this.loginForm = {
      username: '',
      password: ''
    };
  }


  login() {
    this.loginService.auth(this.loginForm)
      .subscribe(
        res => {
          if(res.token) {
            localStorage.setItem('id_token', res.token);
            this.router.navigate(['news']);
          }
        },
        error => console.error(error)
      );

    event.preventDefault();
  }

}
