import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginEmitter = new EventEmitter();

  constructor( private router :Router) { }

   signup(value){
    localStorage.setItem('user', JSON.stringify(value));
    this.router.navigate(['/login'])
   }

   login(email: string, password: string): boolean {
    console.log(email)
    const localStorageData = localStorage.getItem('user');
    if (!localStorageData) {
      console.log('User not found');
      return false;

    }
  
    const user = JSON.parse(localStorageData);
 
    if (user.email === email && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      console.log('Login successful');
     
        this.router.navigate(['/home']);
      this.loginEmitter.emit(true);
      return true;

    }

    console.log('Incorrect email or password');
    return false;

  }
  
  hasSignup(){
    return localStorage.getItem('user') !== null;
  }
    

   isLoggedIn(){
    return localStorage.getItem('isLoggedIn') === 'true';
   }

     logout() {

      localStorage.setItem('isLoggedIn', 'false');
      this.loginEmitter.emit(false);
      this.router.navigate(['/login'])

     }
}
