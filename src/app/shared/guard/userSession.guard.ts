import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { Observable } from 'rxjs';


@Injectable()
export class userSession implements CanActivate {

    constructor(private _authService: LoginService, private router: Router) { }

    canActivate() {

        let token = this._authService.getToken()
        if (token == '') {
            alert("no tiene sesion inciada");
            this.router.navigate(['']);
            return false;
        }

        return true;
    }
}