import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-foodsplash',
  templateUrl: './foodsplash.component.html',
  styleUrls: ['./foodsplash.component.css']
})
export class FoodsplashComponent implements OnInit {
  address = '';
  constructor() { }

  ngOnInit() {
  }

  setAddress(newAddress) {
    this.address = newAddress;
    console.log(this.address);
  }
  
  searchButton() {
    
  }
}
