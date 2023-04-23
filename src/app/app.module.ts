import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgeModule, IconModule, SidebarModule } from 'ng-cdbangular';
import { Page404Component } from './page404/page404.component';
import { AuthService } from './service/auth.service';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
 
@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SidebarModule,IconModule,
    BadgeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
