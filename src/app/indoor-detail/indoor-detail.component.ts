import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApplyservicesService } from '../services/applyservices.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../cart/services.service';
import { WishlistService } from '../services/wishlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../commentservice/service.service';
import { VideoserviceService } from '../videoservice/videoservice.service';
// import { SanitizerPipe } from '../sanitizer.pipe';

@Component({
  selector: 'app-indoor-detail',
  templateUrl: './indoor-detail.component.html',
  styleUrls: ['./indoor-detail.component.scss']
})
export class IndoorDetailComponent implements OnInit {


  constructor(
    private activeroute:ActivatedRoute, 
    private indoorItem:ApplyservicesService, 
     private route:Router,
    private cart: ServicesService,
    private _snackbar:MatSnackBar, 
    private comment:ServiceService,
    private fb:FormBuilder,
    private videoService :VideoserviceService,
    // private sanitizer : SanitizerPipe,

  private wishlist:WishlistService) { }
  selectedValue: number = 0;
  videos: any[] = []; 
  isCommentBoxActive: boolean=false;
  cartitem:any
  listOfNames: string[] = [];
  whitehidden:boolean=true;
    commentForm :FormGroup;
     redhidden:boolean=false;
  indoorId:any
 dataproduct:any
 displayItem:any
 productDetail:any
 printvalue:any
 disables:boolean = false
 comments: { text: string; createdAt:string; name:string; userName:string   }[] = []; 
 newComment: string = '';
 stars: number[] = [1, 2, 3, 4, 5];
//  commmentform : FormGroup
//  formData:FormGroup

  ngOnInit(): void {
    console.log(this.stars)

    // this.commmentform = this.fb.group({
    //   comment : new FormControl('')
    // })

    // this.formData = this.fb.group({
    //   multiplevideo:this.fb.control('',Validators.required),
    // })

    this.comments = this.comment.comments;
    this.listOfNames =this.comment.getListOfName()

      this.displayItem = this.indoorItem.filterdata().filter(value =>{
      return value.catergory === 'indoor'
      });
  
    this.activeroute.paramMap.subscribe((param:ParamMap)=>{
      this.indoorId = param.get('id');
      this.getproducts()
    });
    
  this.loadVideos()

  }


  // functionnutton(){
  //   if (!this.commmentform.get('comment')?.value) {
  //     this.isCommentBoxActive=true;
  //   } else {
  //     this.isCommentBoxActive=false;
  //   }
  // }

  // pushData(){
  //   const params = this.commmentform.get('comment')?.value;
  //   this.comment.comment(params)
  // }
  
  activeCommentBox(){
    this.isCommentBoxActive =true;
  }
  
  cancel(){
    this.isCommentBoxActive =false;
  }
  
 
  getproducts(){

    if(this.displayItem && this.indoorId){
      this.displayItem = this.indoorItem.filterdata().find(item => item.id == this.indoorId);
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
    console.log(id)
    const selectedItem =this.indoorItem.filterdata().find((item:any)=> item.id == id);
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
         
        }
    },
 )
    }
    else{
      console.log('no item added')
    }
 }

 addComment(): void {
   
  this.comment.comment(this.newComment)
    
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
const whishProduct = this.indoorItem.filterdata().find((item:any) => item.id == productId)
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


loadVideos() {
  this.videoService.loadVideos();
  this.videos = this.videoService.videos;
  setTimeout(() => {
    this.videos = this.videoService.videos;
  }, 500);
  console.log(this.videos)

}

uploadVideo(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.videoService.storeVideo(file);
    setTimeout(() => this.loadVideos(), 1000); 
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
}
