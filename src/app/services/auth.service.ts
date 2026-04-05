import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginEmitter = new EventEmitter();

  constructor( private router :Router, ) {
    const savedUser = localStorage.getItem('userdata');
    if (savedUser) {
      this.signupvalue = JSON.parse(savedUser);
    }
   }

      signupvalue:any  
      pvalue:any   
isAuthenticated=false
   private authStatus = new BehaviorSubject<boolean>(false);
isLoggedIn$ = this.authStatus.asObservable();
   signup(value){
    // localStorage.setItem('user', JSON.stringify(value));
  this.pvalue=value
     

    this.router.navigate(['/login'])
   }

   login(userdata:any) {


    //  this.isAuthenticated = true;
    this.signupvalue = userdata;
        localStorage.setItem('isLoggedIn', 'true');      
    localStorage.setItem('userdata', JSON.stringify(userdata));
    this.authStatus.next(true)
    this.router.navigate(['/home']);

    // console.log(email)
    // const localStorageData = this.signupvalue;
    // if (!localStorageData) {
    //   console.log('User not found');
    //   return false;

    // }
  
  //   const user = JSON.parse(localStorageData);
 
  //   if (user.email === email && user.password === password) {
  //     localStorage.setItem('isLoggedIn', 'true');
  //     console.log('Login successful');
     
  //       this.router.navigate(['/home']);
  //     this.loginEmitter.emit(true);
  //     return true;

    }

  //   console.log('Incorrect email or password');
  //   return false;

  // }
  
  // hasSignup(){
  //   return localStorage.getItem('user') !== null;
  // }
    

  //  isLoggedIn(){
  //   return localStorage.getItem('isLoggedIn') === 'true';
  //  }

     logout() {

      // localStorage.setItem('isLoggedIn', 'false');
      // this.loginEmitter.emit(false);
      // this.router.navigate(['/login'])
      //  this.isAuthenticated = false;
    this.signupvalue = null;
      localStorage.removeItem('isLoggedIn');   
    localStorage.removeItem('userdata'); 
     this.authStatus.next(false);
    this.router.navigate(['/login']);

     }


      checkAuthentication(): boolean{
        return  this.authStatus.getValue();
      }



   
}
