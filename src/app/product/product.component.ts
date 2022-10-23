import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  @Input() productItem:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
