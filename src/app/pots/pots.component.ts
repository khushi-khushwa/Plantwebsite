import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.scss']
})
export class PotsComponent implements OnInit {

  constructor(private pots:ApplyservicesService, private route:Router) { }
  allpots:any[] = [];

    ngOnInit(): void {
      this.allpots = this.pots.filterdata().filter(value =>{
           return value.catergory === 'pots'
      });
  
  
      
    }
  
    onbuy(product){
      console.log(product)
  
        this.route.navigate(['/pots-detail', product.id])
    }

}
