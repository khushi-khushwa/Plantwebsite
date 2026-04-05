import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { ApplyservicesService } from '../services/applyservices.service';
@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {
showWishItem
items:any=[]
wishitem:any
  constructor(private wishlist:WishlistService ,
    private alldata: ApplyservicesService
   ) {}

  ngOnInit(): void {
    this.getwish();
      
  }

   getwish(){
    this.wishlist.wishlistItem().subscribe(
      { next: (data)=>{
      this.showWishItem= data;
this.alldata.filterdata().subscribe((data:any[] )=>{
          console.log(data);

      for(let i=0; i<data.length; i++){
        for(let j=0; j<this.showWishItem.length; j++){
            if(data[i]._id === this.showWishItem[j].productId){
                 this.items.push(data[i])
            }
        }
      }
     
          
      })
      console.log(this.showWishItem);
    }
   })
   }

  
   remove(id: string): void {
    console.log(id);
    
   this.items = this.items.filter(item => item._id !== id); 
    // if (this.items) {
      this.wishlist.deleteWishlistItem("delete/product",id).subscribe({
        next: () => {
          console.log("Item deleted successfully:", id);
          // this.getwish(); 
        },
        error: (err) => {
          console.error("Error deleting item:", err);
        }
      });
    }
  // }
  
  
}

