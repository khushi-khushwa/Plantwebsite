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


    this.applyservice.servicesShow().subscribe({
     next: (value)=>{
      this.order =value
      console.log(this.order)
     }
    });
   

  }
  }


