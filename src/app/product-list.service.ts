import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productList } from './productList';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http:HttpClient) { }
  getConfig(){
    return this.http.get<productList>('./assets/products.json')
  }
}
