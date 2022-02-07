import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from '../connection';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient,private _cookieService: CookieService) { }

  login(user: any): Observable<any> {
    return this._http.post(Connection.ENDPOINT, user);
  }

  setToken(token: string){
    this._cookieService.set("token", token);
  }

  getToken(){
    return this._cookieService.get("token");
  }

}
