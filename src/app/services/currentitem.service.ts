import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurrentitemService {

  constructor( private http:HttpClient) { }
  currentitemUrl="http://localhost:4000/currrentitem"
 
  private apiUrl = 'http://localhost:4000/api/plants/add'; 
   orderitem = 'http://localhost:4000/order'

   private sdfgh = 'http://localhost:4000/api/plants/get';
     applyservices="http://localhost:5000/service"

  wishlistItem(){
    return this.http.get(this.currentitemUrl);
  }

  addWishlistItem(item:any){
    return this.http.post(this.currentitemUrl,item);
  }

  deleteWishlistItem(userId:string){
    return this.http.delete(`${this.currentitemUrl}/${userId}`)
  }

  orderadd(item:any){
    return this.http.post(this.orderitem,item);
  }
  orderShow(){
    return this.http.get(this.orderitem);
  }

  applyservice(item:any){
    return this.http.post(this.applyservices,item);
  }
  servicesShow(){
    return this.http.get(this.applyservices);
  }


  addPlant(plantData: any, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('name', plantData.name);
    formData.append('category', plantData.category);
    formData.append('description', plantData.description);
    formData.append('price', plantData.price);
    formData.append('image', image, image.name);  

    return this.http.post(this.apiUrl, formData);
  }


  getPlants(): Observable<any> {
    return this.http.get<any>(this.sdfgh);
  }
}

