import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private fb:FormBuilder , private authservice:AuthService) { }
 isEdit: boolean = false;
  updateProfile : FormGroup
  ngOnInit(): void {

    this.updateProfile = this.fb.group({
          firstname: new FormControl('', Validators.required),
          lastname:new FormControl('', Validators.required),
          email: new FormControl('',  Validators.required),
          password:new FormControl('',  Validators.required)
        });

    const localStorageData = localStorage.getItem('user');
    const user = JSON.parse(localStorageData);
    if (localStorageData) {
     this.isEdit = true;
     this.updateProfile.patchValue({
      firstname : user.firstname,
      lastname : user.lastname,
      email : user.email,
      password  :user.password
     })
    }

   
   
   
  }
  update(){
    const value = this.updateProfile.value
    this.authservice.signup(value)
       
  }


}
