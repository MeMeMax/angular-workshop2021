import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('init NavbarComponent');
  }
}
