import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanActivate {

  constructor( private authservice : AuthService , private route:Router){

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authservice.hasSignup()){
      this.route.navigate(['/login']); 
      return true;
    }else{
     
      return false;
  }

    ;
  }

 
  
}
