import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UploaderComponent } from './uploader/uploader.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    LoginComponent,
    UploaderComponent,    
  ],
  imports: [
    
    CommonModule, 
    FormsModule,
    SharedModule,
    
  ]
})
export class ComponentsModule { }
