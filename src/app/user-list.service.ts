import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userList } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserListService {
  constructor(private http:HttpClient) { }
  getConfig(){
    return this.http.get<userList>('./assets/users.json')
  }
}
