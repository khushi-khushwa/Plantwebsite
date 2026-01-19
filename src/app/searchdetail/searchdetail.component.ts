import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../cart/services.service';
import { WishlistService } from '../services/wishlist.service';
import { ApplyservicesService } from '../services/applyservices.service';
import { ServiceService } from '../commentservice/service.service';

@Component({
  selector: 'app-searchdetail',
  templateUrl: './searchdetail.component.html',
  styleUrls: ['./searchdetail.component.scss']
})
export class SearchdetailComponent implements OnInit {

  constructor( private activeroute:ActivatedRoute, private alldata:ApplyservicesService, private route:Router,
    private cart: ServicesService,
     private comment:ServiceService,
  private wishlist:WishlistService) { }
  cartitem:any
  selectedValue: number = 0;
  listOfNames: string[] = [];
  whitehidden:boolean=true;
     commentForm :FormGroup;
     redhidden:boolean=false;
  displayItem:any
  itemId:any;
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
    this.displayItem = this.alldata.filterdata().filter(value =>{
      return value.id 
})


this.activeroute.paramMap.subscribe((param:ParamMap)=>{
  this.itemId=param.get('id');
  this.getproducts()
})



  }
  getproducts(){
    if(this.displayItem && this.itemId){
      this.displayItem = this.displayItem.find(item => item.id == this.itemId);
       if(!this.displayItem){
        this.route.navigate(['/notfound']);
        console.log('product not found')
       }
       else{
        console.log('product is found');
       }
    }

  }
  addToCart(id:number):void{
    const selectedItem =this.displayItem.find((item:any)=> item.id === id);
    if(selectedItem){
      this.cart.addItem(selectedItem).subscribe({
        next:()=>{
          alert('item added',);
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

  onsubmit(){
    this.printvalue=this.commentForm.get('comment')?.value;
  };
  wishItem(productId):void{
    console.log(productId,'sdfgh')
    this.whitehidden=false;
    this.redhidden=true;
    const whishProduct = this.displayItem.find((item:any) => item.id == productId)
    if(whishProduct){
      this.wishlist.addWishlistItem(whishProduct).subscribe({
        next:()=>{
        
        },
        error : (error)=>{
          console.log('not add in wishlist',error);
        }
       })
    }
  }

 

  buyProduct(product:any){
    this.route.navigate(['/buyitem',product.id])
  };


    
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
          
        },
        error: (err) => {
          console.error("Error deleting item:", err);
        }
      });
    }
  
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

  addComment(): void {
    this.comment.comment(this.newComment)
      
    }
}
