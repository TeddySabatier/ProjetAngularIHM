import { Component, OnInit } from '@angular/core';
import { orderList } from '../orderlist';
import { Observable } from 'rxjs';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList :Observable<orderList>|any;
  constructor(public orderListService:OrderListService) { }
  ngOnInit(): void {
    this.initConfig();
  }
  initConfig():void{
    this.orderList= this.orderListService.getConfig();
  }
}
