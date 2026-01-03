import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
image = [

// {
//   image: "assets/saleoff/p3.png",
//   name: "Purple Flower",
//   price: "Rs. 1000", 
// },

{
  image: "assets/saleoff/p6.png",
  name: "Ficus Pandrata",
  price: "Rs. 1000", 
  route:'indoor'
},
{
  image: "assets/saleoff/p10.png",
  name: "Ficus Pandrata",
  price: "Rs. 1000",
   route:'indoor' 
},
{
  image: "assets/saleoff/p9.png",
  name: "Camille in Pot",
  price: "Rs. 1000", 
   route:'indoor'
},
{
  image: "assets/saleoff/p5.png",
  name: "Ficus Pandrata",
  price: "Rs. 1000", 
},
{
  image: "assets/saleoff/p8.png",
  name: "Ficus Pandrata",
  price: "Rs. 1000", 
},
{
  image: "assets/saleoff/kurpi.png",
  name: "Kurpi",
  price: "Rs. 300", 
   route:'tools'
},
{
  image: "assets/saleoff/favda.png",
  name: "Favda",
  price: "Rs. 1000", 
   route:'tools'
},
{
  image: "assets/saleoff/pransplanter.png",
  name: "pransplanter",
  price: "Rs. 1000", 
   route:'tools'
},
{
  image: "assets/saleoff/pruning.png",
  name: "Cutter",
  price: "Rs. 1000", 
   route:'tools'
},
{
  image: "assets/saleoff/water.png",
  name: "Water mug",
  price: "Rs. 1000", 
   route:'tools'
},
{
  image: "assets/saleoff/adeniyam.png",
  name: "Adeniyam",
  price: "Rs. 1000",
   route:'outdoor' 
},
{
  image: "assets/saleoff/lily.png",
  name: "Lily",
  price: "Rs. 1000", 
   route:'outdoor'
},
{
  image: "assets/saleoff/yellow.png",
  name: "Yellow Lily",
  price: "Rs. 1000", 
   route:'outdoor'
},
{
  image: "assets/saleoff/marrygold.png",
  name: "Marrygold",
  price: "Rs. 1000", 
   route:'outdoor'
},
{
  image: "assets/saleoff/pinkrose.png",
  name: "Pinkrose",
  price: "Rs. 1000", 
   route:'outdoor'
},

];


graphicimage = [
  {

  "img":"assets/section2/air.jpg",
  "name":"Air Purifying"
  
},
{
  
  "img":"assets/section2/herb.jpg",
  "name":"Ceramic Pots"
},
{
  
  "img":"assets/section2/bucketplant.jpg",
  "name":"Low Maintenance"

},
{
  
  "img":"assets/section2/bundle.jpg",
  "name":"Plant Bundle"

},
{
  
  "img":"assets/section2/indoor.jpg",
  "name":"Indoor Plants"
},
{
  
  "img":"assets/section2/seed.jpg",
   "name":"Herb Seeds"
}
];

bannerimage=[
  {

    "img":"assets/images/slider4.webp",
    "name":"Air Purifying"
    
  },
  
  {
    
    "img":"assets/slider/slide2.jpg",
    "name":"Plant Bundle"
  
  },
  {
    
    "img":"assets/slider/slide3.jpg",
    "name":"Indoor Plants"
  },
  {
    
    "img":"assets/slider/slide4.jpg",
     "name":"Herb Seeds"
  }
]
decor=[
  {
    image:'assets/slider/slide2.jpg',
    heading:'Nourish Your Green Haven!',
    describe:'Keep your plants thriving with our premium soil, fertilizers, and care essentials.',
    shop:'Shop Plant Care'
  },
  {
    image:'assets/slider/slide3.jpg',
    heading:'Elevate Your Garden’s Charm!',
    describe:'Discover elegant pots, planters, and décor that transform your garden into a serene paradise.',
    shop:'Explore Décor'
    
  },
  // {
  //   image:'assets/slider/banner-home-15.jpg',
  //   heading:'Pebbles-Starting Rs.79',
  //   describe:'Add visual and textural features to your garden with a wide range of natural pebbles.',
  //   shop:'Shop Now'
  // },

]

// care=[
 
  
// ]

saleOff=[
  {
    image: "assets/saleoff/p1.jpg",
    name: "Purple Flower",
    price: "Rs. 1000", 
  },
  {
    image: "assets/saleoff/p2.jpg",
    name: "Delay Plants",
    price: "Rs. 1000", 
  },
  {
    image: "assets/saleoff/p3.jpg",
    name: "Ficus Pandrata",
    price: "Rs. 1000", 
  },
  {
    image: "assets/saleoff/p4.jpg",
    name: "Camille in Pot",
    price: "Rs. 1000", 
  },
]

allProducts:any={};
 indoor :any[] = [];
 outdoor :any[] = [];
 tools :any[] = [];
 flowerplants :any[] = [];
 pots:any[]=[];
 compost:any[]=[];


 home={
  "indoor":[
    {
      image:'assets/indoor/arecapalm.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/indoor/elephant.png',
      price:'Rs. 300',
      name:'button-cactus'
    },
    {
      image:'assets/indoor/salmonium.png',
      price:'Rs. 300',
      name:'money-plant'
    },
    {
      image:'assets/indoor/syngonium.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/indoor/yellow_moenyplant.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/indoor/moneyplant.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/indoor/green_moneyplant.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/indoor/pieacelili.png',
      price:'Rs. 300',
      name:'arecapam'
    },

  ],

  "tools":[
    {
      image:'assets/tools/3.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/tools/4.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/tools/6.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/tools/7.png',
      price:'Rs. 300',
      name:'arecapam'
    },
      
    {
      image:'assets/tools/8.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/tools/10.png',
      price:'Rs. 300',
      name:'arecapam'
    },

  ],

 

  "outdoor":[
    {
      image:'assets/outdoor/tablebrush.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/outdoor/white-ficus.png',
      price:'Rs. 300',
      name:'button-cactus'
    },
    {
      image:'assets/outdoor/oxygenplant.png',
      price:'Rs. 300',
      name:'money-plant'
    },
    {
      image:'assets/outdoor/morchera.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/outdoor/kranchula.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/outdoor/ixora.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/outdoor/gudel.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/outdoor/bougainvaill.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/outdoor/yellow-bougainvilla.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/outdoor/yellow-rose.png',
      price:'Rs. 300',
      name:'arecapam'
    },
    {
      image:'assets/outdoor/gudel.png',
      price:'Rs. 300',
      name:'arecapam'
    },
  ]
 }

 categories=[
  {
    image:'assets/images/categories/1.jpg',
    name:'Indoor plants'
  },
  {
    image:'assets/images/categories/2.jpg',
    name:'Outdoor plants'
  },
  {
    image:'assets/images/categories/3.jpg',
    name:'Air-purify plants'
  },
  {
    image:'assets/images/categories/4.jpg',
    name:'Planters & pots'
  },
  {
    image:'assets/images/categories/5.jpg',
    name:'Gardening tools'
  },
]
  
   
 

  constructor(private allproducts:ApplyservicesService, private authservice:AuthService, private router:Router) { 
    
  }
  

  ngOnInit(): void {
    
    this.allProducts = this.home


    this.indoor= this.allProducts.indoor;
    this.outdoor= this.allProducts.outdoor;
    console.log(this.outdoor)
    this.tools=this.allProducts.tools
  
  }


 
  carouselOptions: OwlOptions = {
    margin:20,
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
        items: 4
      }
    },
    nav: true
  }

  customOption:OwlOptions ={
    margin:20,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items:1
      }
    },
    nav: true
  }

moveto(r){
this.router.navigate([r])
}
    gottowish(product){
     console.log(product)
     this.router.navigate(['wishlist'])
  }
  }





 

