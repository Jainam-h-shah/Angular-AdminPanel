import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
{ path: '', loadChildren: () => import('./default-layout/default-layout.module').then(m => m.DefaultLayoutModule) },
{path:'**',component:Page404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
