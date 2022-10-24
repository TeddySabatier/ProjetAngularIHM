import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hasError:Boolean=false;
  isValid:Boolean=false;
  login:String="";
  password:String="";
  confirmPassword:String="";
  message:String="";
  constructor(private logger:LoggerService) { }

  ngOnInit(): void {
  }
  onClickValidate():void{
    if(this.password==this.confirmPassword && this.password.length>8 && this.message!=""){
      this.isValid=true;
      this.hasError=false;
    }
    else{
      this.hasError=true;
      this.isValid=false;
    }
  }

}
