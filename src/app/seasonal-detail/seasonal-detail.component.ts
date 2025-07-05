import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../cart/services.service';
import { WishlistService } from '../services/wishlist.service';
import { ApplyservicesService } from '../services/applyservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../commentservice/service.service';
@Component({
  selector: 'app-seasonal-detail',
  templateUrl: './seasonal-detail.component.html',
  styleUrls: ['./seasonal-detail.component.scss']
})
export class SeasonalDetailComponent implements OnInit {

  constructor(
    private activeroute:ActivatedRoute, 
    private seasonalItem:ApplyservicesService, 
     private route:Router,
    private cart: ServicesService,
    private _snackbar:MatSnackBar, 
  private wishlist:WishlistService,
  private comment :ServiceService
  ) { }

  cartitem:any
  whitehidden:boolean=true;
     commentForm :FormGroup;
     redhidden:boolean=false;
     seasonalId:any
 dataproduct:any
 displayItem:any
 productDetail:any
 listOfNames: string[] = [];
 printvalue:any
 selectedValue: number = 0;
    comments: { text: string; createdAt:string; name:string; userName:string   }[] = []; 
    newComment: string = '';
    stars: number[] = [1, 2, 3, 4, 5];
  ngOnInit(): void {

    
    this.commentForm = new FormGroup({
      comment: new FormControl('')
    })
this.displayItem = this.seasonalItem.filterdata().filter(value =>{
       return value.catergory === 'seasonal'
})


this.activeroute.paramMap.subscribe((param:ParamMap)=>{
  this.seasonalId=param.get('id');
  this.getproducts()
})


}

addComment(): void {
  this.comment.comment(this.newComment)
    
  }
getproducts(){

if(this.displayItem && this.seasonalId){
  this.displayItem = this.seasonalItem.filterdata().find(item => item.id == this.seasonalId);
  if(!this.displayItem){
    this.route.navigate(['/notfound'])
    console.log('product not found')
  }
  else{
    console.log('product is found')
  }
}
}

addToCart(id:number):void{
const selectedItem = this.seasonalItem.filterdata().find((item:any)=> item.id === id);
if(selectedItem){
  this.cart.addItem(selectedItem).subscribe({
    next:()=>{
      this._snackbar.open(' Item ia added to cart ','close',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['notif-success'],
      }); 
      this.getitem();
    },
   error: (error)=>{
      console.log(error);
      alert('failed')
    }
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

// wishlist----------------------------
getWishItem():void{
this.wishlist.wishlistItem().subscribe({
  next: (data) =>{
    console.log('wishlist item', data);
  }
})
}



wishItem(productId):void{
console.log(productId,'sdfgh')
this.whitehidden=false;
this.redhidden=true;
const whishProduct = this.seasonalItem.filterdata().find((item:any) => item.id == productId)
if(whishProduct){
this.wishlist.addWishlistItem(whishProduct).subscribe({
next:()=>{
  this._snackbar.open('Item is added to wishlist','close',{
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'right',
    panelClass: ['notif-success'],
  }); 
  this.getWishItem()
},
error : (error)=>{
  console.log('not add in wishlist',error);
}
})
}

} 
onsubmit(){
this.printvalue=this.commentForm.get('comment')?.value;
};
buyProduct(product:any){
this.route.navigate(['/buyitem',product.id])
};

additem(){
this.whitehidden=true;
this.redhidden=false;
console.log('sdfghjnk')
}

  
countStar(star){
  this.selectedValue = star;
  console.log(star);
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

}
