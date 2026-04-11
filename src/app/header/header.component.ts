import { Component, OnInit ,HostListener, Input, Output, EventEmitter} from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { Router,NavigationEnd  } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApplyservicesService } from '../services/applyservices.service';
import { Subscription } from 'rxjs';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Output() searchResults = new EventEmitter<any[]>();

dropdownOpenFlag=false
  matchvalue:any;
  alltdata
  faheart = faHeart;
  login:boolean = false;

  constructor(private authServices: AuthService, private _fb:FormBuilder, private dataservice:ApplyservicesService, 
    private route:Router
  ) {}

  filterdata : FormGroup 

  @HostListener('document:click', ['$event'])
clickOutside(event: any) {
  if (!event.target.closest('.profile-dropdown')) {
    this.dropdownOpenFlag = false;
  }
}
  ngOnInit() {


    this.filterdata = this._fb.group({

      filter : new FormControl('')

    })


    this.authServices.isLoggedIn$.subscribe((status:boolean)=>{
 console.log(status);
   this.login = status;
    })
    // this.authServices.loginEmitter.subscribe((res:any)=>{
    //   console.log(res,'fu');
    //   if(res && res == true){
    //     this.login = true;
    //   }
   
    // })

   
  
  }




 
  searchclick() {
    const searchTerm = this.filterdata.get('filter')?.value;
     console.log(searchTerm)
    this.route.navigate(['/searchitem'], { queryParams: { data: searchTerm } });

  }
  
  logout() {
    this.authServices.logout();
    // this.login= false;
  }
ngOnDestroy() {
    // this.authSub?.unsubscribe(); // ✅ memory leak nahi hoga
  }


  dropdownOpen(){
     console.log('adf')
this.dropdownOpenFlag = !this.dropdownOpenFlag;
  }
}
