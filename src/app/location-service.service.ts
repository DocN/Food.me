import { Injectable } from '@angular/core';

@Injectable()
export class LocationServiceService {
  formatted_address = '';
  city = '';
  country = '';
  lat = '';
  long = '';
  postal = '';
  constructor() { }

}
