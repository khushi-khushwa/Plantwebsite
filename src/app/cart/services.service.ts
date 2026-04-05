import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // carturl="http://localhost:8000/cart"
 
  carturl=`${environment.apiUrl}/api/cart`
  constructor(private http:HttpClient) {}


  // getitem(){
  //   return this.http.get(this.carturl)
  // }
  getitem(): Observable<any[]> {
  return this.http.get<any[]>(`${this.carturl}/get/product`);
}
  addItem(url:any,item:any){
    return this.http.post(`${this.carturl}/${url}/${item._id}`,{})
  }
   
  removeCartItem(url:any,id:string):Observable<any[]>{
    return this.http.delete<any[]>(`${this.carturl}/${url}/${id}`)
  }


}
