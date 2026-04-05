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
this.itemShow()
  }

  cancelOrder(id){
this.orderData.cancelOrder(id).subscribe({
  next:(value)=>{
    console.log(value)
    this.itemShow()
  }
})
  }

  itemShow(){
     this.orderData.orderShow().subscribe({
     next: (value:any)=>{
      this.order =value.message
      console.log(this.order)
     }
    });
   

  }
}
