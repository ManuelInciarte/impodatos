import { Component, OnInit } from '@angular/core';
import { selectPrograms } from 'src/app/shared/Models/selectPrograms';
import { UploaderService } from 'src/app/shared/services/uploader/uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  selectProgramsOptions: selectPrograms[] = [];

  constructor(private _uploaderService : UploaderService) { }

  ngOnInit(): void {
    this.loadSelectPrograms();
  }


  loadSelectPrograms(){
    this._uploaderService.getSelectProgram().subscribe(data =>{
      this.selectProgramsOptions = data;
    })
  }
  
  onFileSelected(){
    
  }

}
