import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesService } from '../cart/services.service';
import { WishlistService } from '../services/wishlist.service';
import { ServiceService } from '../commentservice/service.service';
@Component({
  selector: 'app-compost-detail',
  templateUrl: './compost-detail.component.html',
  styleUrls: ['./compost-detail.component.scss'],
})
export class CompostDetailComponent implements OnInit {
  cartitem: any;
  constructor(
    private compost: ApplyservicesService,
    private route: Router,
    private activeroute: ActivatedRoute,
    private cart: ServicesService,
    private wishlist: WishlistService,
    private comment:ServiceService,
    private _snackbar:MatSnackBar, 
  ) // public listOfNames: string[] = [];
  {}

  date;
  selectedValue: number = 0;
  listOfNames: string[] = [];
  whitehidden: boolean = true;
  commentForm: FormGroup;
  redhidden: boolean = false;
  faheart = faHeart;
  getallCompost: any = {};
  allCompost: any = [];
  applyId: any;
  productdetail: any;
  printvalue: string = '';
  displayItem;
   wishlistItems: any[] = [];
  comments: { text: string; createdAt:string; name:string; userName:string   }[] = []; 
  newComment: string = '';
  stars: number[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {



    this.comments = this.comment.comments;
  this.listOfNames =this.comment.getListOfName()




  this.compost.filterdata().subscribe((data: any[]) => {

   
    this.allCompost = data.filter(item => item.category === "compost");

    console.log("Filtered Data:", this.allCompost);

   
    this.activeroute.paramMap.subscribe((params: ParamMap) => {

      this.applyId = params.get("id");
      console.log("ID:", this.applyId);
      this.getproduct()
      
      // this.displayItem = this.allCompost.find(
      //   item => item._id === this.applyId
      // );
      // if (!this.displayItem) {
      //   // this.route.navigate(['/notfound']);
      //   console.log("product not found ")
      // }

    });

  });

}

  buyProduct(product: any) {
    this.route.navigate(['/buyitem', product._id]);
  }
 

    
 addComment(): void {
   
  this.comment.comment(this.newComment)
      
  this.comments = [...this.comment.comments];
  this.listOfNames = [...this.comment.getListOfName()];

  this.newComment = '';
  }

  getproduct(): void {
    console.log(this.applyId)
    if (this.applyId) {
      console.log(this.allCompost)
      this.displayItem = this.allCompost.find((products: any) => products._id == this.applyId);

      console.log(this.displayItem);
      if (!this.displayItem) {
        this.route.navigate(['/notfound']);
      } else {
        console.log('product is found');
      }
    } else {
      console.log('product found');
      this.checkWishlistStatus(this.displayItem._id)

    }
  }

  // cart-----------------------------

  addToCart(id: number): void {
    const selectedItem = this.allCompost
      .find((item: any) => item._id === id);
    if (selectedItem) {
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
      });
    } else {
      console.log('no item added');
    }
  }

  getitem(): void {
    this.cart.getitem().subscribe({
      next: (data) => {
        console.log('cart items', data);
        this.cartitem = data;
      },
    });
  }

  // wishlist----------------------------


  getWishItem(): void {
    this.wishlist.wishlistItem().subscribe({
      next: (data) => {
       
        console.log('wishlist item', data);
      },
    });
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

  wishItem(productId: number): void {
    console.log(productId, 'sdfgh');
    this.whitehidden = false;
    this.redhidden = true;
    const whishProduct = this.allCompost
      .find((item: any) => item._id === productId);
    if (whishProduct) {
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
      });
    }
  }


  getadsa() {
    const commentvalue = this.commentForm.get('comment').value;
    console.log(commentvalue);
  }


  removeitem(id:string){
    console.log(id)
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

