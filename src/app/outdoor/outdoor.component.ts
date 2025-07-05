import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.scss']
})
export class OutdoorComponent implements OnInit {

  constructor(private outdoorProducts:ApplyservicesService, private route:Router) { }

outdoor:any[]=[];
  ngOnInit(): void {
    this.outdoor = this.outdoorProducts.filterdata().filter(value =>{
    return value.catergory === 'indoor'
    });

   
  }
  
  onbuy(product){
    console.log(product)

      this.route.navigate(['/outdoor-detail', product.id])

     
    
      
    
  }
}
