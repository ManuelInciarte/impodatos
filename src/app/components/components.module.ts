import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UploaderComponent } from './uploader/uploader.component';



@NgModule({
  declarations: [
    LoginComponent,
    UploaderComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class ComponentsModule { }
