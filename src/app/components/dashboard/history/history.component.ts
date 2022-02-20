import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/shared/Models/history';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { UploaderService } from 'src/app/shared/services/uploader/uploader.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historialUpdate!:History[];
  displayedColumns: string[] = ['idRegistro', 'programId', 'usuario', 'estado', 'fecha'];
  dataSource =  this.historialUpdate;
  
  constructor(private _uploaderService : UploaderService, private _login : LoginService) { }

  ngOnInit(): void {
    const usuario= this._login.getToken();  
    this.getHistory(usuario);
  }

  getHistory(user:string){
    
    this._uploaderService.getHistoryUser(user).subscribe(result =>{
      this.historialUpdate = result
      this.dataSource = result;
      console.log(this.historialUpdate);
    });
    
  }

}
