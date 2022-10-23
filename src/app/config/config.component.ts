import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config :Observable<Config>|undefined;
  constructor(public configService:ConfigService) { }
  ngOnInit(): void {
    this.initConfig();
  }
  initConfig():void{
    this.config= this.configService.getConfig();
  }

}
