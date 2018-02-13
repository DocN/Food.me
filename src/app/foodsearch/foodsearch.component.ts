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
  constructor(private LocationServiceService: LocationServiceService, private http: HttpClient) { }

  ngOnInit() {
    this.address = this.LocationServiceService.formatted_address;

    let url="https://api.yelp.com/v3/businesses/search?location=Vancouver&term=sushi&limit=50";
    let header =new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 
        'Bearer '+ this.token});

    this.http.get(url, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token) }).subscribe(data => {
      console.log(data);
    });
  }
}
