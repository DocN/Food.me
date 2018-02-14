import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from '../location-service.service';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams } from '@angular/common/http';
import { BusinessDataService } from '../business-data.service';

@Component({
  selector: 'app-foodsearch',
  templateUrl: './foodsearch.component.html',
  styleUrls: ['./foodsearch.component.css']
})
export class FoodsearchComponent implements OnInit {
  address = '';
  token = 'GKUmYzkZ-5Mvc_rp8eiGtXSNDugMAs_lF54n5SfWsWmudDvqg1dOb3Bi5sLbgykBH85K6WSvQrnOmywcnMfgkhMjwduHpjGNz6L1EaIani-USmFoVNJcbU2yT0iCWnYx';

  businessName: string[] = [];
  businessAddress: string[] = [];
  businessImage: string[] = [];
  businessURL: string[] = [];
  businessLat: string[] = [];
  
  businessLong: string[] = [];
  businessDistanceAway: string[] = []; 
  show: boolean[] = [];
  pick: boolean[] = [];
  choices: string[] = [];
  constructor(private BusinessDataService: BusinessDataService, private LocationServiceService: LocationServiceService, private http: HttpClient) { }

  ngOnInit() {
    this.address = this.LocationServiceService.formatted_address;
    this.businessName = this.BusinessDataService.businessName;
    this.businessAddress = this.BusinessDataService.businessAddress;
    this.businessImage = this.BusinessDataService.businessImage;
    this.businessURL = this.BusinessDataService.businessURL;
    this.businessDistanceAway = this.BusinessDataService.businessDistanceAway;
    this.show = this.BusinessDataService.show;
  }

  removeItem(event) {
    let id = event.target.id;
    var str = id.replace('input', '');
    this.show[str] = false;
  }

  pickItem(event) {
    let id = event.target.id;
    event.target.className="btn btn-primary";
    var str = id.replace('input', '');
    this.pick[str] = true;
    console.log(id);
  }

  randomPick() {
    let counter = 0;
    for (let i in this.pick) {
      this.choices.push(i);
      counter = counter +1;
    }
    let result = Math.floor((Math.random() * counter) + 0);
    for (let i in this.show) {
      this.show[i] = false;
    }   
    this.show[this.choices[result]] = true;
  }


}
