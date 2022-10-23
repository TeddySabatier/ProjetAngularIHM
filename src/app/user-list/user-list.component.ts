import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userList } from '../user';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  userList :Observable<userList>|any;
  constructor(public userListService:UserListService) { }
  ngOnInit(): void {
    this.initConfig();
  }
  initConfig():void{
    this.userList= this.userListService.getConfig();
  }

}
