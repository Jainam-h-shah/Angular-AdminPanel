import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgeModule, IconModule, SidebarModule } from 'ng-cdbangular';
import { Page404Component } from './page404/page404.component';
import { AuthServiceService } from './service/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SidebarModule,IconModule,
    BadgeModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
