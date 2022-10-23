import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data=[
    {
      name:"Brosse à dent de luxe",
      price:10,
    },
    {
      name:"Smartphone",
      price:1000,
    },
    {
      name:"Ordi",
      price:1200,
      discount:"20%"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }



}
