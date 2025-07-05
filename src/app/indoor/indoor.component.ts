import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.component.html',
  styleUrls: ['./indoor.component.scss']
})
export class IndoorComponent implements OnInit {

  constructor(private indoorproducts:ApplyservicesService, private route:Router ) { }

  indoor:any[] = [];
getIndoorPlants:any={};
  ngOnInit(): void {
    this.indoor = this.indoorproducts.filterdata().filter(value =>{
      return value.catergory === 'indoor'
      });
  }

  onbuy(product){
    console.log(product)

      this.route.navigate(['/indoor-detail', product.id])

     
    
      
    
  }


}
