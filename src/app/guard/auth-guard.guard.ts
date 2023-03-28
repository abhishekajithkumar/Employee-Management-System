import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    let storedData= localStorage.getItem("login");
    let loginData
    if(storedData!=null){
      loginData=JSON.parse(storedData)
    }

    let name=loginData.name.trim();
    let password=loginData.password.trim();


   

    if(name=='admin' && password=='password'){
      return true;
      
    }
    else{
      return false;
    }

  }
  
}
