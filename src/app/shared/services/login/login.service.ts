import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from '../connection';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient,private _cookieService: CookieService, private _router: Router) { }

  login(user: any): Observable<any> {
    var response =  this._http.post(Connection.ENDPOINT, user);
    return response; 
  }

  setToken(token: string){
    this._cookieService.set("token", token);
  }

  getToken(){
    return this._cookieService.get("token");
  }
  logout(){
    this._cookieService.deleteAll();
    this._router.navigateByUrl('login');
    
  }

}
