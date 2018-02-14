import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FoodsplashComponent } from './foodsplash/foodsplash.component';
import { FoodsearchComponent } from './foodsearch/foodsearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { LocationServiceService } from './location-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BusinessDataService } from './business-data.service';


const appRoutes:Routes = [
  {
    path: '',
    component: FoodsplashComponent,
  },
  {
    path: 'search',
    component: FoodsearchComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    FoodsplashComponent,
    FoodsearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash:true}),
    FormsModule,
    Ng4GeoautocompleteModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LocationServiceService,
    BusinessDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
