import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor( private http:HttpClient) { }

   wishlistUrl="http://localhost:7000/wishlist"


  wishlistItem(){
    return this.http.get(this.wishlistUrl);
  }

  addWishlistItem(item:any){
    return this.http.post(this.wishlistUrl,item);
  }

  deleteWishlistItem(userId:string){
    return this.http.delete(`${this.wishlistUrl}/${userId}`)
  }
}
