import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListService } from '../product-list.service';
import { productList } from '../productList';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList :Observable<productList>|any;
  constructor(public productListService:ProductListService) { }
  ngOnInit(): void {
    this.initConfig();
  }
  initConfig():void{
    this.productList= this.productListService.getConfig();
  }
}
