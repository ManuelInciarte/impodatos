import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from '../connection';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { login } from '../../models/login';
import { LoginResponse } from '../../models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient,private _cookieService: CookieService, private _router: Router) { }

  loginInterno() : Observable<any[]>{
    this._cookieService.deleteAll();
    return this._http.get<any[]>('./assets/data/usuarios.json');
  }
  login(user: login): Observable<LoginResponse> {
    this._cookieService.deleteAll();
    var response =  this._http.post<LoginResponse>(Connection.ENDPOINTBACK + 'Login/getUser', user);
    return response; 
  }

  setToken(token: string, user: string){
    this._cookieService.set("token", token);
    this._cookieService.set("usuario", user);
  }

  getToken(){
    return this._cookieService.get("token");
  }
  getUsuario(){
    return this._cookieService.get("usuario");
  }
  logout(){
    this._cookieService.deleteAll();
    this._router.navigateByUrl('login');
    
  }

}
