import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../assets/cleopatra/css/style.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  userframechange = false;
  ngOnInit(): void {
  }

  OnUserFrameChange() {
    this.userframechange = !this.userframechange;
  }
}
