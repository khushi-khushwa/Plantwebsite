import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CurrentitemService {

  constructor( private http:HttpClient) { }
  currentitemUrl=`${environment.apiUrl}/currrentitem`
 
  private apiUrl = 'http://localhost:4000/api/plants/add'; 
   orderitem = `${environment.apiUrl}/api/order`

   private sdfgh = `${environment.apiUrl}/api/plants/get`;
     applyservices=`${environment.apiUrl}/api/service`

  // wishlistItem(){
  //   return this.http.get(this.currentitemUrl);
  // }

  // addWishlistItem(item:any){
  //   return this.http.post(this.currentitemUrl,item);
  // }

  deleteWishlistItem(userId:string){
    return this.http.delete(`${this.currentitemUrl}/${userId}`)
  }

  orderadd(item:any){
    console.log(item)
    return this.http.post(`${this.orderitem}/orderPlant`,item);
  }
  orderShow(){
    return this.http.get(`${this.orderitem}/allorder`);
  }

   cancelOrder(id:any){
    return this.http.delete(`${this.orderitem}/cancelorder/${id}`);
  }

applyservice(item: any) {
  console.log("Sending:", item);
  return this.http.post(`${this.applyservices}/applyService`, item);
}

servicesShow() {
  return this.http.get(`${this.applyservices}/showService`);
}

deleteService(id: string) {
  return this.http.delete(`${this.applyservices}/cancelService/${id}`);
}
  // addPlant(plantData: any, image: File): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('name', plantData.name);
  //   formData.append('category', plantData.category);
  //   formData.append('description', plantData.description);
  //   formData.append('price', plantData.price);
  //   formData.append('image', image, image.name);  

  //   return this.http.post(this.apiUrl, formData);
  // }


  getPlants(): Observable<any> {
    return this.http.get<any>(this.sdfgh);
  }
}

