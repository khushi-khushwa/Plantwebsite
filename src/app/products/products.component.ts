import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products = [
 {
  img:'assets/images/pots/fiber/1.webp',
 },
 {
  img:'assets/images/pots/fiber/2.webp',
 },
 {
  img:'assets/images/pots/fiber/4.jpg',
 },
 {
  img:'assets/images/pots/fiber/4.jpg',
 },
 {
  img:'assets/images/pots/fiber/5.jpg',
 },
 {
  img:'assets/images/pots/fiber/6.webp',
 },
 {
  img:'assets/images/pots/fiber/7.webp',
 },
 {
  img:'assets/images/pots/fiber/8.webp',
 },
 {
  img:'assets/images/pots/fiber/10.webp',
 },
 {
  img:'assets/images/pots/fiber/9.webp',
 },
 {
  img:'assets/images/pots/fiber/11.jpg',
 },
 {
  img:'assets/images/pots/fiber/12.jpg',
 },
]


  constructor() { }

  ngOnInit(): void {
  }

}
