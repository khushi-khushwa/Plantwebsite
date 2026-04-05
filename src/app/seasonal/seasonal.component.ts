import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-seasonal',
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.scss']
})
export class SeasonalComponent implements OnInit {

  constructor(private seasonal:ApplyservicesService, private route:Router) { }
  getallseasonal:any={}
  allSeasonal:any=[];

  ngOnInit(): void {
    
     
     this.seasonal.filterdata().subscribe((value:any[]) =>{
         this.allSeasonal = value.filter(data=>{
      return data.category === "seasonal"
      })
})

    
  }
  toggleLike(product:any){
    this.getallseasonal.toggleLike(product)
  }
  onBuy(products: any){
    this.route.navigate(['/seasonal-detail', products._id])
  }
  }


