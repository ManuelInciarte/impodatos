import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading=false;


  constructor(private fb: FormBuilder, private _loginService : LoginService, private _router: Router,
    private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    let usuario ={
      email: this.form.value.user,
      password: this.form.value.password
      };
      this.loading=true
      this._loginService.loginInterno().subscribe(response =>{
        if (usuario.email){
          this._loginService.setToken(usuario.email);
          this.loading=false
          this._router.navigateByUrl('dashboard');
        }
        else{
          this.loading=false
          this.alertMsj("Usuario O contraseña Incorrecto");
        }

      }, error=>{
        this.loading=false
        this.alertMsj("Ocurrio Un error de conexion");
      });
  }

  alertMsj(mensajeError: string){
    this._snackBar.open(mensajeError,'',{
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  


}
