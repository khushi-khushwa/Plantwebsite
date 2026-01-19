import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../cart/services.service';
import { WishlistService } from '../services/wishlist.service';
import { ApplyservicesService } from '../services/applyservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../commentservice/service.service';
@Component({
  selector: 'app-outdoor-detail',
  templateUrl: './outdoor-detail.component.html',
  styleUrls: ['./outdoor-detail.component.scss']
  
})
export class OutdoorDetailComponent implements OnInit {

  constructor(
    private activeroute:ActivatedRoute, 
    private outdoorItem:ApplyservicesService, 
     private route:Router,
    private cart: ServicesService,
    private comment:ServiceService,
    private _snackbar:MatSnackBar, 
  private wishlist:WishlistService
  ) { }

  cartitem:any
  selectedValue: number = 0;
  listOfNames: string[] = [];
  whitehidden:boolean=true;
     commentForm :FormGroup;
     redhidden:boolean=false;
  outdoorId:any
//  dataproduct:any[]=[]
 displayItem:any
 productDetail:any;
  wishlistItems: any[] = [];
 printvalue:any
 comments: { text: string; createdAt:string; name:string; userName:string   }[] = []; 
 newComment: string = '';
 stars: number[] = [1, 2, 3, 4, 5];
  ngOnInit(): void {

    this.comments = this.comment.comments;
    this.listOfNames =this.comment.getListOfName()
  
      this.commentForm = new FormGroup({
            comment: new FormControl('')
          })

      this.displayItem = this.outdoorItem.filterdata().filter(value =>{
        return value.catergory == 'indoor'
      })
      console.log(this.displayItem)
  
      this.activeroute.paramMap.subscribe((param:ParamMap)=>{
        this.outdoorId=param.get('id');
        this.getproducts()
      })
      
  
    }

   addComment(): void {
   
  this.comment.comment(this.newComment)
      
  this.comments = [...this.comment.comments];
  this.listOfNames = [...this.comment.getListOfName()];

  this.newComment = '';
  }
    getproducts(){
  
      if(this.displayItem && this.outdoorId){
        this.displayItem = this.outdoorItem.filterdata().find(item => item.id == this.outdoorId);
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
      const selectedItem =this.outdoorItem.filterdata().find((item:any)=> item.id === id);
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
  
  
   checkWishlistStatus(id){
  this.wishlist.wishlistItem().subscribe({
  next: (data) =>{
    console.log('wishlist item', data);
    this.wishlistItems  = data

      const isWishlisted  = data.some( item => item.id  == id )
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
      this.wishlist.deleteWishlistItem(id).subscribe({
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


  wishItem(productId):void{
  console.log(productId,'sdfgh')
  this.whitehidden=false;
  this.redhidden=true;
  const whishProduct = this.outdoorItem.filterdata().find((item:any) => item.id == productId)
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
