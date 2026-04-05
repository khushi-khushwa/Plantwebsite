import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { ApplyservicesService } from '../services/applyservices.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartitem:any;
cartItems:any=[]
  constructor(private data:ServicesService,
private allData: ApplyservicesService
  ) { }

  ngOnInit(): void {
   this.getitems();
   
    

  }
  getitems(){
   this.data.getitem().subscribe({
    next: (data) =>{
      console.log(data);
     
      this.cartitem = data;
       this.allData.filterdata().subscribe((value:any[]) =>{
       
           for(let i=0; i<value.length; i++){
            for(let j =0; j<this.cartitem.allData.length; j++){
              if(value[i]._id === this.cartitem.allData[j].cartId ){
                 this.cartItems.push(value[i])
              }
            }
           }
           console.log(this.cartItems)
    })
      console.log(this.cartItems)
    }
   });
  }

  removecart(id){
    this.cartItems = this.cartItems.filter(item => item._id !== id)
     console.log(this.cartitem)
    //  if(this.cartItems){
      this.data.removeCartItem("delete/product",id).subscribe({
        next : ()=>{
          console.log('cart item is deleting', id);
          // this.getitems()
        },
        error: ()=>{
 console.log('not cart item left', id)
        }
       })
    //  }
    
     
  };
 

}
