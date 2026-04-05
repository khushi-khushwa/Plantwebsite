import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplyservicesService } from '../services/applyservices.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private fb:FormBuilder , private router:Router, private authService: AuthService, 
    private loginService:ApplyservicesService,
    private _snackbar: MatSnackBar,) { }

  
   loginForm : FormGroup

  ngOnInit(): void {

    this.loginForm = this.fb.group({  
      email: new FormControl('',  Validators.required),
      password:new FormControl('',  Validators.required)

    });
  }



  submit(){
  //   if(this.loginForm.valid){
  //       const {email, password} = this.loginForm.value
  //      console.log('sdfdsf')
  // if(this.authService.login(email,password)){
  //   console.log('asdvc')
  //   this.router.navigate(['/home'])
  // }
  // }

  const loginData = this.loginForm.value
   this.loginService.loginUser(loginData).subscribe({
    next: (res: any) => {
      console.log('Success:', res);
      this._snackbar.open('login successfully', 'close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['notif-success'],
            });
       this.authService.login(res); 
      // alert('login Successfully');
      this.loginForm.reset();
      // this.router.navigate(['/home'])
    },
    error: (err: any) => {
      console.log('Error:', err);
      alert('Something went wrong');
    }
  });


}

    // const emaildata = this.loginForm.get('email').value
    // console.log(emaildata)
    // const passworddata = this.loginForm.get('password').value
    // console.log(passworddata)

  
    // const storeuser = localStorage.getItem('userdata');
    // if(storeuser){
    //   const localdets = JSON.parse(storeuser);
    //   console.log(localdets)
    //   if(emaildata === localdets.email && passworddata === localdets.password){
        
    //          this.router.navigate(['/home'])
    //   }
    //   else{
    //     alert('invalid credentials')
    //   }
    // }


    signup(){
      console.log("sdsf")
      this.router.navigate(['/signup'])
    }
  }

//   }
// }
