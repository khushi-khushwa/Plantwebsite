import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {
showWishItem
wishitem:any
  constructor(private wishlist:WishlistService  ) {}

  ngOnInit(): void {
    this.getwish();
     
  }

   getwish(){
    this.wishlist.wishlistItem().subscribe(
      { next: (data)=>{
      this.showWishItem= data;
      console.log(this.showWishItem);
    }
   })
   }

  
   remove(id: string): void {
    console.log(id);
    
    const itemExists = this.showWishItem.filter(item => item.id !== id); 
    if (itemExists) {
      this.wishlist.deleteWishlistItem(id).subscribe({
        next: () => {
          console.log("Item deleted successfully:", id);
          this.getwish(); 
        },
        error: (err) => {
          console.error("Error deleting item:", err);
        }
      });
    }
  }
  
  
}

