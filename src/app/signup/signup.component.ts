import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router, private authService:AuthService) { }
   
  signupForm : FormGroup


  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: new FormControl('', Validators.required),
      lastname:new FormControl('', Validators.required),
      email: new FormControl('',  Validators.required),
      password:new FormControl('',  Validators.required)
    });

   
    console.log(this.signupForm)
  }

  submit(){
    if(this.signupForm.valid){
    const  value = this.signupForm.value
         this.authService.signup(value) 
         console.log('fdghj')
    }
  }
}
