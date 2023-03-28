import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let storedData = localStorage.getItem("login");
    let loginData
    if (storedData != null) {
      loginData = JSON.parse(storedData)
    }

    let name = loginData.name.trim();
    let password = loginData.password.trim();


    
    
    if (name == 'user' && password == '123') {
      return true;

    }
    else {
      return true;
    }

  }
}
