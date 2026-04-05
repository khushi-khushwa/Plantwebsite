import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor( private http:HttpClient) { }

  //  wishlistUrl="http://localhost:7000/wishlist"

    wishlistr = `${environment.apiUrl}/api/wishlist`
  // wishlistItem(){
  //   return this.http.get(this.wishlistUrl);
  // }

  wishlistItem(): Observable<any[]> {
  return this.http.get<any[]>(`${this.wishlistr}/get/product`);
}

  addWishlistItem(url:any,item:any){
    console.log(item._id)
    return this.http.post(`${this.wishlistr}/${url}/${item._id}`,{});
  }

  deleteWishlistItem(url:any,userId:string){
    return this.http.delete(`${this.wishlistr}/${url}/${userId}`)
  }
}
