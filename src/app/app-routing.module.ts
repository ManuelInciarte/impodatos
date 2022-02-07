import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { userSession } from './shared/guard/userSession.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'uploader', component: UploaderComponent, canActivate : [userSession]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
