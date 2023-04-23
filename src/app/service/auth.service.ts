import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor() { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
// var url = route.url.toString();
//     if(url.indexOf("login") != -1 ){
//       return true;
//     }
      return true;
  }
}



