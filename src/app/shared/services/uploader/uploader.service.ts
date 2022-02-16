import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { selectPrograms } from '../../Models/selectPrograms';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(private _http : HttpClient) { }

  getSelectProgram() : Observable<selectPrograms[]>{
    return this._http.get<selectPrograms[]>('./assets/data/programs.json');
  }

}
