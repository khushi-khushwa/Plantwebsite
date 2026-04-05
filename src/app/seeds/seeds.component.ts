import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CurrentitemService } from '../services/currentitem.service';
// import { FormData } from '@angular/forms';
@Component({
  selector: 'app-seeds',
  templateUrl: './seeds.component.html',
  styleUrls: ['./seeds.component.scss']
})
export class SeedsComponent implements OnInit {
  plants: any[] = [];
  constructor(private seeds:ApplyservicesService, private route:Router, private http:HttpClient, private cursrent:CurrentitemService) { }
   getSeeds:any=[];

   plantData = {
    name: '',
    category: '',
    description: '',
    price: '',
  };
  selectedImage: File | null = null;
isfilteropen:boolean=false;
  ngOnInit(): void {
    
     this.seeds.filterdata().subscribe((data:any[]) =>{
           this.getSeeds=data.filter(value =>{

           return value.category === 'seeds'
          })
})

this.cursrent.getPlants().subscribe(data => {
  this.plants = data;
  console.log(data)
});
  }

  onbuy(product){
    console.log(product)

      this.route.navigate(['/seeds-detail', product._id])

  
    
  }

  // onSubmit(): void {
  //   if (this.selectedImage) {
  //     this.cursrent.addPlant(this.plantData, this.selectedImage).subscribe(
  //       (response) => {
  //         console.log('Plant added successfully', response);
  //       },
  //       (error) => {
  //         console.error('Error adding plant', error);
  //       }
  //     );
  //   } else {
  //     alert('Please select an image');
  //   }
  // }

  // Method to handle file input change
  // onFileChange(event: any): void {
  //   if (event.target.files.length > 0) {
  //     this.selectedImage = event.target.files[0];
  //   }
  // }



}
