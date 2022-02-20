import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { selectPrograms } from '../../Models/selectPrograms';
import { Connection } from '../connection';
import {History } from '../../Models/history'

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(private _http : HttpClient) { }

  getSelectProgram() : Observable<selectPrograms[]>{
    return this._http.get<selectPrograms[]>('./assets/data/programs.json');
  }


  uploadFile(param: any) : Observable<any>{
    return this._http.post<any>(Connection.ENDPOINTBACK + 'history', param);
      
  }

  getHistoryUser(user: string) : Observable<History[]>{
 
    return this._http.get<History[]>(Connection.ENDPOINTBACK + 'history/user?user='+user);
  }

}
