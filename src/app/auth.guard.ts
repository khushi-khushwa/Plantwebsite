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
    this.route.navigate(['/home']);
    return true;
  }else{
    
    return false
  }
    
  }
  }


  

