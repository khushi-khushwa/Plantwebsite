import { Component, OnInit ,HostListener, Input, Output, EventEmitter} from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { Router,NavigationEnd  } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApplyservicesService } from '../services/applyservices.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Output() searchResults = new EventEmitter<any[]>();


  matchvalue:any;
  alltdata
  faheart = faHeart;
  login:boolean = false;

  constructor(private authServices: AuthService, private _fb:FormBuilder, private dataservice:ApplyservicesService, 
    private route:Router
  ) {}

  filterdata : FormGroup 

  ngOnInit() {


    this.filterdata = this._fb.group({

      filter : new FormControl('')

    })


    this.authServices.loginEmitter.subscribe((res:any)=>{
      console.log(res,'fu');
      if(res && res == true){
        this.login = true;
      }
   
    })
  
  }




 
  searchclick() {
    const searchTerm = this.filterdata.get('filter')?.value;
     console.log(searchTerm)
    this.route.navigate(['/searchitem'], { queryParams: { data: searchTerm } });

  }
  
  logout() {
    this.authServices.logout();
    this.login= false;
  }

}
