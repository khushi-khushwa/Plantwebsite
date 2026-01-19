import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartitem:any;
  constructor(private data:ServicesService) { }

  ngOnInit(): void {
   this.getitem();
  }
  getitem(){
   this.data.getitem().subscribe({
    next: (data) =>{
      console.log(data);
      this.cartitem = data;
    }
   });
  }

  removecart(id){
    this.cartitem = this.cartitem.filter(item => item.id !== id)
     console.log(this.cartitem)
    //  if(cart){
      this.data.removeCartItem(id).subscribe({
        next : ()=>{
          console.log('cart item is deleting', id);
          this.getitem()
        },
        error: (error)=>{
 console.log('error occur not item delete', id)
        }
       })
    //  }
    
     
  };
 

}
