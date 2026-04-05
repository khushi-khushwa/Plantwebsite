import { Component, OnInit } from '@angular/core';
import { CurrentitemService } from '../services/currentitem.service';
@Component({
  selector: 'app-applyservices',
  templateUrl: './applyservices.component.html',
  styleUrls: ['./applyservices.component.scss']
})
export class ApplyservicesComponent implements OnInit {

  constructor( private applyservice : CurrentitemService) { }
  order:any;
  count:1;
  ngOnInit(): void {


this.getService()

  }

  cancel(id:any){
    this.applyservice.deleteService(id).subscribe({
      next:(v)=>{
console.log(v)
this.getService()
      }

    })
  }

  getService(){
      this.applyservice.servicesShow().subscribe({
     next: (value)=>{
      this.order =value
      console.log(this.order)
     }
    });
   
  }
  }



