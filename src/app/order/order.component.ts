import { Component, OnInit } from '@angular/core';
import { CurrentitemService } from '../services/currentitem.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderData :CurrentitemService) { }

  order:any;
  ngOnInit(): void {
 this.orderData.orderShow().subscribe({
     next: (value)=>{
      this.order =value
      console.log(this.order)
     }
    });
   

  }

}
