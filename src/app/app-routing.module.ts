import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { Page404Component } from './page404/page404.component';
import { AuthService } from './service/auth.service';


const routes: Routes = [
{ path: '', loadChildren: () => import('./default-layout/default-layout.module').then(m => m.DefaultLayoutModule) ,canActivate:[AuthService]},
{path:'login',component:LoginComponent}
,{path:'**',component:Page404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
