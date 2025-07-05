import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { Router ,ActivatedRoute,ParamMap} from '@angular/router';
import { ServiceService } from '../commentservice/service.service';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  constructor(
    private ser:ApplyservicesService, 
    private route:Router, private router:ActivatedRoute,
    private comment :ServiceService) {
 
   }

   applyId: any;
   serviceDetail : any
   
  ngOnInit(): void {

    this.router.paramMap.subscribe((params: ParamMap)=>{
      this.applyId = params.get('id');
  this.fun();

    });
  }
  fun(){
     if(this.ser.data){
    this.serviceDetail = this.ser.data.find(
      service=> service.id === this.applyId
    );
     
    if(!this.ser.data){
       this.route.navigate(['not found'])
    }
    else{
      console.error('services data is not an array');
    }
  }
}

  apply(){
    this.route.navigate(["/applyform",])
  }

}
