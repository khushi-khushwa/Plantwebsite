import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from '../commentservice/service.service';
import { WishlistService } from '../services/wishlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplyservicesService } from '../services/applyservices.service';
import { ServicesService } from '../cart/services.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tools-details',
  templateUrl: './tools-details.component.html',
  styleUrls: ['./tools-details.component.scss']
})
export class ToolsDetailsComponent implements OnInit {

  // constructor(private route:Router,  private activeroute:ActivatedRoute ) { }




   constructor( private activeroute:ActivatedRoute, 
          private toolsitems:ApplyservicesService, 
           private route:Router,
          private cart: ServicesService,
          private _snackbar:MatSnackBar, 
          private comment:ServiceService,
        private wishlist:WishlistService
        ) { }
      
        cartitem:any
        listOfNames: string[] = [];
        whitehidden:boolean=true;
           commentForm :FormGroup;
           redhidden:boolean=false;
           toolId:any
       dataproduct:any
       displayItem:any
       printvalue:any;
        wishlistItems: any[] = [];
       selectedValue: number = 0;
      comments: { text: string; createdAt:string; name:string; userName:string   }[] = []; 
      newComment: string = '';
      stars: number[] = [1, 2, 3, 4, 5];
        ngOnInit(): void {
      
          this.commentForm = new FormGroup({
            comment: new FormControl('')
          })
  
            this.commentForm = new FormGroup({
                  comment: new FormControl('')
                })
  
            this.displayItem = this.toolsitems.filterdata().filter(value =>{
              return value.catergory === 'tools'
        })
        
            this.activeroute.paramMap.subscribe((param:ParamMap)=>{
              this.toolId=param.get('id');
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
            if(this.displayItem && this.toolId){
              this.displayItem = this.toolsitems.filterdata().find(item => item.id == this.toolId);
              console.log(this.displayItem)
              if(!this.displayItem){
                this.route.navigate(['/notfound'])
                console.log('product not found')
              }
              else{
                console.log('product is found')
                this.checkWishlistStatus(this.displayItem.id)
              }
           }
          }
        
          // 
          addToCart(id:number):void{
            const selectedItem = this.toolsitems.filterdata().find((item:any)=> item.id === id);
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
        console.log(isWishlisted)
         this.redhidden = isWishlisted;
       
    }
  })
  }
  
  removeitem(id){
 
  console.log('sdfghjnk')
  
      console.log(id);
      
    //  this.wishlist = this.wishlist.filter(item => item.id !== id); 
      if (this.wishlist) {
        this.wishlist.deleteWishlistItem(id).subscribe({
          next: () => {
              this.redhidden = false;
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
   
        const whishProduct = this.toolsitems.filterdata().find((item:any) => item.id == productId)
        if(whishProduct){
          this.wishlist.addWishlistItem(whishProduct).subscribe({
            next:()=>{
                this.redhidden = true;
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
