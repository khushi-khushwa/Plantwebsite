import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.scss']
})
export class PotsComponent implements OnInit {

  constructor(private pots:ApplyservicesService, private route:Router) { }
  allpots:any = [];

    ngOnInit(): void {
       this.pots.filterdata().subscribe((value:any[]) =>{
                this.allpots = value.filter(data =>{
                   return data.category === 'pots'
                })
      });
  
  
      
    }
  
    onbuy(product){
      console.log(product)
  
        this.route.navigate(['/pots-detail', product._id])
    }

}
