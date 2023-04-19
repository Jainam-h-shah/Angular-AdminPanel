import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { DefaultNavbarComponent } from './default-navbar/default-navbar/default-navbar.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultSlidebarComponent } from './default-slidebar/default-slidebar.component';
import { SidebarModule } from 'ng-cdbangular';



@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DefaultNavbarComponent,
    DefaultFooterComponent,
    DefaultSlidebarComponent,
    
  ],
  imports: [
    CommonModule,
    DefaultLayoutRoutingModule,SidebarModule
  ]
})
export class DefaultLayoutModule { }
