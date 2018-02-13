import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from '../location-service.service';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams } from '@angular/common/http';

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

  constructor(private LocationServiceService: LocationServiceService, private http: HttpClient) { }

  ngOnInit() {
    this.address = this.LocationServiceService.formatted_address;

    let url="http://www.youads.co/php/1.php";

    this.http.get(url, { }).subscribe(data => {
      console.log(data);
      this.storeAPIData(data);
    });
  }

  storeAPIData(data) {
    data.businesses.forEach(element => {
      this.businessName.push(element.name);
      this.businessAddress.push(element.location.address1); 
      this.businessLat.push(element.coordinates.latitude);
      this.businessLong.push(element.coordinates.longitude);
      this.businessImage.push(element.image_url);
      this.businessURL.push(element.url);
    });
  }
}
