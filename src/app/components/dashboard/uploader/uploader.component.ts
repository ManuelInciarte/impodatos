import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { Programs, selectPrograms,Program } from 'src/app/shared/models/selectPrograms';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { UploaderService } from 'src/app/shared/services/uploader/uploader.service';
import swal from'sweetalert2';
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  selectProgramsOptions!: Program[];
  programIdSeleccionado: any;
  form: FormGroup;
  uploadFile!: Array<File>
  file!: File; 
  loading=false;
 

  constructor(private _uploaderService : UploaderService, private fb: FormBuilder, private _login : LoginService) {
    this.form = this.fb.group({
      program: ['', Validators.required],
      attachment: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.loadSelectPrograms();
  }


  loadSelectPrograms(){
    this._uploaderService.getSelectProgram().subscribe(data =>{
      let {programs} = data;
      this.selectProgramsOptions = programs;
    })
  }

  changeSelect(){
    let id = this.form.value.program;
    var obj = this.selectProgramsOptions.find(function(result){
        return result.programStages.find(function (response){
          return response.id == id;
        });
      }); 
      this.programIdSeleccionado = obj?.programid;
  }
  
  onUpload(){
    this.loading=true;  
    const file: File = this.uploadFile[0];
    let formData = new FormData();
    formData.append('Programsid',this.programIdSeleccionado);
    formData.append('IdprogramStages', this.form.value.program);
    formData.append( 'UserLogin', this._login.getUsuario());
    formData.append( 'ExcelFile', file, file.name);
    formData.append( 'token', this._login.getToken() )
    this._uploaderService.uploadFile(formData).subscribe(result =>{
      
      let mensaje = '';
      if (!result){
         mensaje = 'El archivo se proceso Exitosamente';
         this.loading=false;
         return swal.fire(mensaje);
      }

        for (let i in result )
        {
          mensaje = mensaje + result[i].errorMessage + '\n ' ; 
        }
        this.loading=false;
       return swal.fire('No se pudo procesar el archivo  por los siguientes motivos: \n'+ mensaje);
    },error=>{
      this.loading=false;
      return swal.fire('Ocurrio un error Intente de nuevo');
    })

  }
  onFileSelected(e:any){
    this.uploadFile = e.target.files;

  }

}
