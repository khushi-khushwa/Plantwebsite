import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../cart/services.service';
import { WishlistService } from '../services/wishlist.service';
import { ApplyservicesService } from '../services/applyservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../commentservice/service.service';
@Component({
  selector: 'app-pots-detail',
  templateUrl: './pots-detail.component.html',
  styleUrls: ['./pots-detail.component.scss']
})
export class PotsDetailComponent implements OnInit {

  constructor(
    private activeroute:ActivatedRoute, 
      private potItem:ApplyservicesService, 
       private route:Router,
      private cart: ServicesService,
      private _snackbar:MatSnackBar, 
    private wishlist:WishlistService,
        private comment:ServiceService,
    ) { }
  
    selectedValue: number = 0;
    comments: { text: string; createdAt:string; name:string; userName:string   }[] = []; 
    newComment: string = '';
    stars: number[] = [1, 2, 3, 4, 5];
    cartitem:any
    listOfNames: string[] = [];
    whitehidden:boolean=true;
       commentForm :FormGroup;
       redhidden:boolean=false;
    potId:any
     wishlistItems: any[] = [];
   dataproduct:any[]=[]
   displayItem
 allPots:any=[]
   printvalue:any
    ngOnInit(): void {
  
    
        this.commentForm = new FormGroup({
              comment: new FormControl('')
            })
            
       this.potItem.filterdata().subscribe((value:any[]) =>{
           value.filter(data =>{
            this.allPots=data.category === 'pots'
           })
        })
        
    this.comments = this.comment.comments;
    this.listOfNames =this.comment.getListOfName()
    
        this.activeroute.paramMap.subscribe((param:ParamMap)=>{
          this.potId=param.get('id');
          this.getproducts()
        })
        
    
      }

       
  // addComment(): void {
  //   this.comment.comment(this.newComment)
      
  //   }

  addComment(): void {
  this.comment.comment(this.newComment);

 
  this.comments = [...this.comment.comments];
  this.listOfNames = [...this.comment.getListOfName()];

 
  this.newComment = '';
}

      getproducts(){
    
        if(this.allPots &&this.potId){
          this.displayItem = this.allPots.find(item => item._id == this.potId);
          if(!this.displayItem){
            this.route.navigate(['/notfound'])
            console.log('product not found')
          }
          else{
            console.log('product is found');
            this.checkWishlistStatus(this.displayItem.id)
          }
       }
      }
    
      addToCart(id:number):void{
        const selectedItem = this.allPots.find((item:any)=> item._id === id);
        if(selectedItem){
          this.cart.addItem("post/product",selectedItem).subscribe({
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
  console.log(id)
this.whitehidden=true;
this.redhidden=false;
console.log('sdfghjnk')

    console.log(id);
    
  //  this.wishlist = this.wishlist.find(item => item.id !== id); 
    if (this.wishlist) {
      this.wishlist.deleteWishlistItem("delete/product",id).subscribe({
        next: () => {
          this._snackbar.open('Item is deleted to wishlist','close',{
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['notif-success'],
          }); 
          console.log("Item deleted successfully:", id);
          
        },
        error: (err) => {
          console.error("Error deleting item:", err);
        }
      });
    }
  
}

    
    wishItem(productId):void{
    console.log(productId,'sdfgh')
    this.whitehidden=false;
    this.redhidden=true;
    const whishProduct =this.allPots.find((item:any) => item._id == productId)
    if(whishProduct){
      this.wishlist.addWishlistItem("post/product",whishProduct).subscribe({
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
