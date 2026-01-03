import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  detail:any = [
    {
      heading: "Products",
      detailData: [
        { name: "indoor plants" },
        { name: "outdoor plants" },
        { name: "pots" },
        { name: "compost" }
      ]
    },
    {
      heading: "Service",
      detailData: [
        { name: "about us" },
        { name: "Contact" },
        { name: "privacy policy" },
        { name: "delivery information" }
      ]
    },
    {
      heading: "Extra",
      detailData: [
        { name: "Search" },
        { name: "wishlist" },
        { name: "All collections" },
        { name: "All products" }
      ]
    },
    {
      heading: "Contact",
      detailData: [
        { icon: "fa-solid fa-phone", contact: "324567876543" },
        { icon: "fa-solid fa-envelope", contact: "shyam3gmail.com" },
        { icon: "fa-solid fa-location-dot", contact: "Sec-102, Gurgaon" }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
