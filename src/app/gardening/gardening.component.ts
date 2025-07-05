import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ApplyservicesService } from '../services/applyservices.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { VideoplayComponent } from '../videoplay/videoplay.component';

@Component({
  selector: 'app-gardening',
  templateUrl: './gardening.component.html',
  styleUrls: ['./gardening.component.scss'],
  providers:[ApplyservicesService]
})
export class GardeningComponent implements OnInit {
  projectcount = 0;
  typeplant=0;
  goodstaff=0;

  bannerimg=[
    {
      img:'assets/images/gardening/back-bg.png'
    },
    {
      img:'assets/images/gardening/front-bg.png'
    }
  ]

  seller=[
      {
        image:"assets/images/gardening/1.jpg",
        name:'Calathea plant',
      },
      // {
      //   image:"assets/images/gardening/2.jpg",
      //   name:'Calathea plant',
      // },
      {
        image:"assets/images/gardening/3.jpg",
        name:'Chinese Evergreen',
      },
      {
        image:"assets/images/gardening/6.jpg",
        name:'Panda',
      },
      {
        image:"assets/images/gardening/7.jpg",
        name:'Money Plant',
      },
      {
        image:"assets/images/gardening/8.jpg",
        name:'crassula ovata',
      },
  ]

  question=[
    {
     ques:'Do you provide plant care support after purchase?',
     ans:'Absolutely! You can reach out to us for any plant care guidance. We also provide tips and tricks through our blog and social media.',
     id:'flush-collapseOne'
    },
    {
      ques:'Do you provide care instructions for plants?',
      ans:'Yes! Each plant comes with detailed care instructions, including watering frequency, light requirements, and temperature preferences to ensure it thrives in your environment.',
      id:'flush-collapseTwo'
     },
     {
      ques:'Do you offer pet-friendly plants?',
      ans:'Yes! We have a selection of pet-friendly plants like Areca Palm, Boston Fern, and Spider Plant that are safe for cats and dogs.',
      id:'flush-collapseThree'
     },
    
  ]

  testimonial=[
    {
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    image:'assets/testimonial/1.jpg',
    name:'Monica Faiz',
    client:'Our Client'
    },
    {
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. ',
      image:'assets/testimonial/2.jpg',
      name:'Denada',
      client:'Our Client'
      },
      {
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. ',
        image:'assets/testimonial/1.jpg',
        name:'Rinday Rose',
        client:'Our Client'
        },
        {
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
          image:'assets/testimonial/girl.jpg',
          name:'Ammar',
          client:'Our Client'
          },
  ]
  
  constructor(private router:Router , private serv:ApplyservicesService , private dialog:MatDialog) {
    this.applyservice = this.serv.data;
    console.log(this.applyservice)
   }
 
projectcountstop:any = setInterval(()=>{
  this.projectcount++;

  if(this.projectcount == 287){
    clearInterval(this.projectcountstop);
  }
},10);

typeplantstop:any = setInterval(()=>{
  this.typeplant++;

  if(this.typeplant == 300){
    clearInterval(this.typeplantstop);
  }
},10);

goodstaffstop:any = setInterval(()=>{
  this.goodstaff++;

  if(this.goodstaff == 200){
    clearInterval(this.goodstaffstop);
  }
},10);


  applyservice:any
 
  apply(service:any){
    this.router.navigate(["/service-detail",service.id ])
  }
  ngOnInit(): void {

  }



  carouselOptions: OwlOptions = {
    loop: true,
margin:13,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    smartSpeed: 700,
    // navText: ['', ''],
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
  
  }
  
  option: OwlOptions = {
    loop: true,
margin:13,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    smartSpeed: 700,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  
  }

  videoplay(){
const DialogRef  = this.dialog.open(VideoplayComponent);
 DialogRef.afterClosed().subscribe((confirm:boolean)=>{
   if(confirm){
    console.log('video played')
   }
  })
}
  
  }