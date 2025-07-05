import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {

  constructor() { }
  image = [
    
    {
      image: "assets/images/cart6.jpg",
      name: "Purple Flower",
      price: "Rs. 1000", 
    },
    {
      image: "assets/images/cart1.jpg",
      name: "Delay Plants",
      price: "Rs. 1000", 
    },

    {
      image: "assets/images/cart4.jpg",
      name: "Camille in Pot",
      price: "Rs. 1000", 
    },
    {
      image: "assets/images/winterplant.jpg",
      name: "Purple Flower",
      price: "Rs. 1000", 
    },
    // {
    //   image: "assets/saleoff/p10.jpg",
    //   name: "Delay Plants",
    //   price: "Rs. 1000", 
    // },
    // {
    //   image: "assets/saleoff/p11.jpg",
    //   name: "Ficus Pandrata",
    //   price: "Rs. 1000", 
    // },
    // {
    //   image: "assets/saleoff/p12.jpg",
    //   name: "Camille in Pot",
    //   price: "Rs. 1000", 
    // },
    // {
    //   image: "assets/saleoff/p13.jpg",
    //   name: "Purple Flower",
    //   price: "Rs. 1000", 
    // },
   
    
    ];
    

    
saleOff=[
  {
    image: "assets/saleoff/p14.jpg",
    name: "Purple Flower",
    price: "Rs. 1000", 
  },
  {
    image: "assets/saleoff/p15.jpg",
    name: "Delay Plants",
    price: "Rs. 1000", 
  },
  // {
  //   image: "assets/saleoff/p16.jpg",
  //   name: "Ficus Pandrata",
  //   price: "Rs. 1000", 
  // },
 
]


carouselOptions: OwlOptions = {
  margin:15,
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 3
    }
  },
  nav: true
}

  ngOnInit(): void {
  }

}
