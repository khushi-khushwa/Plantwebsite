import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  image = [
    {
  
    "img":"assets/images/cart3.webp",
    "name":"bonsis"
    
  },
  {
    
    "img":"assets/images/cart1.webp",
    "name":"aripam"
  },
  {
    
    "img":"assets/images/cart2.webp",
    "name":"cactus"
  
  },
  {
    
    "img":"assets/images/cart4.webp",
    "name":"rosegolden"
  
  },
  {
    
    "img":"assets/images/cart5.webp",
    "name":"rose"
  },
  {
    
    "img":"assets/images/cart6.webp",
     "name":"aripefm"
  }
  ]
  public name=''
  constructor() { }

  ngOnInit(): void {
  }

  // myEvent(){
  //   // alert('welcome to angular');
  //   // console.log('welcome to angular');

  //   // this.name='learing'
  // }
  // myEvent(a:string){
  //  alert(a);
  // }
  myEvent(event){
   console.log(event.type);
  }

}
