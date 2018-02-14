import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams } from '@angular/common/http';
import { LocationServiceService } from './location-service.service';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BusinessDataService {
  businessName: string[] = [];
  businessAddress: string[] = [];
  businessImage: string[] = [];
  businessURL: string[] = [];
  businessLat: string[] = [];
  
  businessLong: string[] = [];
  businessDistanceAway: string[] = []; 
  businessRating: string[] = [];
  show: boolean[] = [];
  pick: boolean[] = [];
  constructor(private LocationServiceService: LocationServiceService, private http: HttpClient) { }

  setupBusinessData() {
    console.log("here");
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
      this.businessRating.push(element.rating);
      let distance = this.calculateDistance(this.LocationServiceService.lat, element.coordinates.latitude, this.LocationServiceService.long, element.coordinates.longitude);
      this.businessDistanceAway.push(distance.toString());
      this.show.push(true);
      this.pick.push(false);
    });
  }

  /** Takes in two location points and returns their distance in km */
  calculateDistance(ourLat, lat2, ourLon, lon2) {
    var R = 6371e3; // meters 
    var φ1 = this.toRadians(ourLat);
      var φ2 = this.toRadians(lat2);
      var Δφ = this.toRadians(lat2-ourLat);
      var Δλ = this.toRadians(lon2-ourLon);

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    var d = d * 0.001;
    return d; 

  };

  /** converts degrees to radians */
  toRadians(degrees) {
    return degrees * Math.PI / 180;
  };

}
