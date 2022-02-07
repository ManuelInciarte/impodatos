import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;

  constructor(private _loginService : LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let usuario ={
      email: this.email,
      password: this.password
    };
    this._loginService.login(usuario).subscribe(response =>{
      this._loginService.setToken(response.token);
      this._router.navigateByUrl('uploader');
    });

  }

}
