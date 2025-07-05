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
  comments: { text: string; createdAt:string; name:string; userName:string   }[] = []; 
  newComment: string = '';
  stars: number[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {



    this.comments = this.comment.comments;
  this.listOfNames =this.comment.getListOfName()


    this.displayItem = this.compost.filterdata().filter((value) => {
      return value.catergory === 'compost';
    });
    console.log(this.displayItem);

    this.activeroute.paramMap.subscribe((params: ParamMap) => {
      this.applyId = params.get('id');
      this.getproduct();
    });

    let date = new Date();
    console.log(date);
    this.date = date.getSeconds();
  }

  buyProduct(product: any) {
    this.route.navigate(['/buyitem', product.id]);
  }
 

    
  addComment(): void {
  this.comment.comment(this.newComment)
    
  }

  getproduct(): void {
    if (this.displayItem && this.applyId) {
      this.displayItem = this.compost
        .filterdata()
        .find((products: any) => products.id == this.applyId);

      console.log(this.displayItem);
      if (!this.displayItem) {
        this.route.navigate(['/notfound']);
      } else {
        console.log('product is found');
      }
    } else {
      console.log('product found');
    }
  }

  // cart-----------------------------

  addToCart(id: number): void {
    const selectedItem = this.compost
      .filterdata()
      .find((item: any) => item.id === id);
    if (selectedItem) {
      this.cart.addItem(selectedItem).subscribe({
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

  wishItem(productId: number): void {
    console.log(productId, 'sdfgh');
    this.whitehidden = false;
    this.redhidden = true;
    const whishProduct = this.compost
      .filterdata()
      .find((item: any) => item.id == productId);
    if (whishProduct) {
      this.wishlist.addWishlistItem(whishProduct).subscribe({
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

  additem() {
    this.whitehidden = true;
    this.redhidden = false;
    console.log('sdfghjnk');
  }

  getadsa() {
    const commentvalue = this.commentForm.get('comment').value;
    console.log(commentvalue);
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

