import { Injectable } from '@angular/core';
import {  CanActivate, } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router, private authservice: AuthService){}
  canActivate(): boolean{

      
  if(this.authservice.isLoggedIn()){
   
    return true;
  }else{
     this.route.navigate(['/login']);
    return false
  }
    
  }
  }


  

