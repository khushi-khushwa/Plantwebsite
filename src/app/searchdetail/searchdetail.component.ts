import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../cart/services.service';
import { WishlistService } from '../services/wishlist.service';
import { ApplyservicesService } from '../services/applyservices.service';
import { ServiceService } from '../commentservice/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-searchdetail',
  templateUrl: './searchdetail.component.html',
  styleUrls: ['./searchdetail.component.scss']
})
export class SearchdetailComponent implements OnInit {

  constructor( private activeroute:ActivatedRoute, private alldata:ApplyservicesService, private route:Router,
    private cart: ServicesService,
        private _snackbar:MatSnackBar, 
     private comment:ServiceService,
  private wishlist:WishlistService) { }
  cartitem:any
  Item:any
  selectedValue: number = 0;
  listOfNames: string[] = [];
  whitehidden:boolean=true;
     commentForm :FormGroup;
     redhidden:boolean=false;
      wishlistItems: any[] = [];
  displayItem:any
  itemId:any;
  searchId:any
  printvalue:any;
  comments: { text: string; createdAt:string; name:string; userName:string   }[] = []; 
  newComment: string = '';
  stars: number[] = [1, 2, 3, 4, 5];
  ngOnInit(): void {

    
    this.comments = this.comment.comments;
    this.listOfNames =this.comment.getListOfName()

    this.commentForm = new FormGroup({
      comment: new FormControl('')
    })
this.activeroute.paramMap.subscribe((param:ParamMap)=>{
  this.itemId = param.get('id');

  this.alldata.filterdata().subscribe((value:any[]) =>{
    this.Item = value;
    this.getproducts(); 
  });
});


  }
  getproducts(){
    if( this.itemId && this.Item){
      this.displayItem = this.Item.find(item => item._id.toString() === this.itemId);
      
      console.log(this.displayItem);
       if(!this.displayItem){
        this.route.navigate(['/notfound']);
        console.log('product not found')
       }
       else{
        console.log('product is found');
       
       }
    }else{
      this.checkWishlistStatus(this.displayItem._id)
    }

  }
  addToCart(id:number):void{
    const selectedItem =this.Item.find((item:any)=> item._id === id);
    if(selectedItem){
      this.cart.addItem("post/product",selectedItem).subscribe({
         next: () => {
          this._snackbar.open(' Item ia added to cart ','close',{
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['notif-success'],
          }); 
          this.getitem();
        },
        error: (error) => {
          console.log(error);
          alert('failed');
        },
    },
 )
    }
    else{
      console.log('no item added')
    }
  }
  getitem():void{
    this.cart.getitem().subscribe({
     next: (data) =>{
       console.log('cart items',data);
       this.cartitem=data
     }
    });
   }

  onsubmit(){
    this.printvalue=this.commentForm.get('comment')?.value;
  };

  
  getWishItem(): void {
    this.wishlist.wishlistItem().subscribe({
      next: (data) => {
       
        console.log('wishlist item', data);
      },
    });
  }
  wishItem(productId):void{
    console.log(productId,'sdfgh')
    this.whitehidden=false;
    this.redhidden=true;
    const whishProduct = this.Item.find((item:any) => item._id == productId)
    if(whishProduct){
      this.wishlist.addWishlistItem("post/product",whishProduct).subscribe({
       next: () => {
          this._snackbar.open('Item is added to wishlist','close',{
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['notif-success'],
          }); 
          this.getWishItem();
        },
        error: (error) => {
          console.log('not add in wishlist', error);
        },
       })
    }
  }

 

  buyProduct(product:any){
    this.route.navigate(['/buyitem',product._id])
  };


     checkWishlistStatus(id){
  this.wishlist.wishlistItem().subscribe({
  next: (data) =>{
    console.log('wishlist item', data);
    this.wishlistItems  = data

      const isWishlisted  = data.some( item => item._id  == id )
       this.redhidden = isWishlisted;
      this.whitehidden = !isWishlisted;
  }
})
}

    removeitem(id){
this.whitehidden=true;
this.redhidden=false;
console.log('sdfghjnk')

    console.log(id);
    
  //  this.wishlist = this.wishlist.filter(item => item.id !== id); 
    if (this.wishlist) {
      this.wishlist.deleteWishlistItem("delete/product",id).subscribe({
         next: () => {
          console.log("Item deleted successfully:", id);
           this._snackbar.open('Item is deleted to wishlist','close',{
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['notif-success'],
          }); 
        },
        error: (err) => {
          console.error("Error deleting item:", err);
        }
      });
    }
  
}

  countStar(star){
    this.selectedValue = star;
    // console.log(star);
  }
  
  
  addClass(star) {
    let ab = "";
    for (let i = 0; i < star; i++) {
      ab = "starId" + i;
      document.getElementById(ab).classList.add("selected");
      console.log(ab)
    }
  
  }
  
  
  removeClass(star) {
    let ab = "";
    for (let i = star-1; i >= this.selectedValue; i--) {
      ab = "starId" + i;
      document.getElementById(ab).classList.remove("selected");
    }
  }
  
  
  submitrating(){
    localStorage.setItem('rating',  JSON.stringify(this.selectedValue))
  
  }

  addComment(): void {
    this.comment.comment(this.newComment)
      
    }
}
