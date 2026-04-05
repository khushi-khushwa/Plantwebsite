import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
 import { ApplyservicesService } from '../services/applyservices.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router, private authService:AuthService, private service:ApplyservicesService,
      private _snackbar: MatSnackBar,
  ) { }
   
  signupForm : FormGroup


  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: new FormControl('', Validators.required),
      // lastname:new FormControl('', Validators.required),
      email: new FormControl('',  Validators.required),
      password:new FormControl('',  Validators.required)
    });

   
    console.log(this.signupForm)
  }

  
 submit() {
  if (this.signupForm.invalid) {
    return;
  }

  const formData = this.signupForm.value;
  // console.log(formData);

  this.service.createAccount(formData).subscribe({
    next: (res: any) => {
      console.log('Success:', res);
      // alert('Account Created Successfully');
      this._snackbar.open('Account Created Successfully', 'close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['notif-success'],
            });
      this.authService.signup(res);
      this.signupForm.reset();
      this.router.navigate(['/login'])
    },
    error: (err: any) => {
      console.log('Error:', err);
      alert('Something went wrong');
    }
  });
  
  //  this.authService.signup(formData) 
  //        console.log('fdghj')
}

   
    
    // if(this.signupForm.valid){
  
        
    // }
  }

