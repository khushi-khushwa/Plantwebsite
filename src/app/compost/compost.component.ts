import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { faHeart,faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compost',
  templateUrl: './compost.component.html',
  styleUrls: ['./compost.component.scss']
})
export class CompostComponent implements OnInit {

  constructor(private compost:ApplyservicesService, private route:Router) { }
  faheart= faHeart;
  getallCompost: any={};
  allCompost:any=[];
 

  ngOnInit(): void {
    this.allCompost = this.compost.filterdata().filter(value =>{
      return value.catergory === 'compost'
      }); 
   
  
    
  }
  toggleLike(product:any){
    this.getallCompost.toggleLike(product)
  }
  onbuy(products: any){
    this.route.navigate(['/compost-detail', products.id])
}


}
