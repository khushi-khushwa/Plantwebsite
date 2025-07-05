import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  carturl="http://localhost:8000/cart"
 

  constructor(private http:HttpClient) {}


  getitem(){
    return this.http.get(this.carturl)
  }

  addItem(item:any){
    return this.http.post(this.carturl,item)
  }
   
  removeCartItem(id){
    return this.http.delete(`${this.carturl}/${id}`)
  }


}
