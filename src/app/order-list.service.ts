import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { orderList } from './orderlist';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private http:HttpClient) { }
  getConfig(){
    return this.http.get<orderList>('./assets/orders.json')
  }
}
