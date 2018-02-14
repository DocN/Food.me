import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LocationServiceService } from '../location-service.service';
import { BusinessDataService } from '../business-data.service';

@Component({
  selector: 'app-foodsplash',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './foodsplash.component.html',
  styleUrls: ['./foodsplash.component.css'],
})
export class FoodsplashComponent implements OnInit {
  constructor(private BusinessDataService: BusinessDataService, private LocationServiceService: LocationServiceService) { }

  public searchSettings: any = {
    showSearchButton: false,
    showCurrentLocation: false,
  };

  ngOnInit() {

  }

  setAddress(addressData) {

  }
  
  autoCompleteCallback1(selectedData:any) {
    console.log(selectedData);
    this.LocationServiceService.formatted_address = selectedData.data.formatted_address;
    this.LocationServiceService.city = selectedData.data.address_components[4].short_name;
    this.LocationServiceService.country = selectedData.data.address_components[6].long_name;
    this.LocationServiceService.lat = selectedData.data.geometry.location.lat;
    this.LocationServiceService.long = selectedData.data.geometry.location.lng;
    this.LocationServiceService.postal = selectedData.data.address_components[7].short_name;
    console.log(this.LocationServiceService.formatted_address);
    console.log(this.LocationServiceService.city);
    console.log(this.LocationServiceService.country);
    console.log(this.LocationServiceService.lat);
    console.log(this.LocationServiceService.long);
    this.BusinessDataService.setupBusinessData();
    //do any necessery stuff.
  }
}
