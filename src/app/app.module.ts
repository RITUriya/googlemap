import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationBarComponent } from './app-navigation-bar/app-navigation-bar.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { InfoWindowComponent } from './info-window/info-window.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationBarComponent,
    GoogleMapComponent,
    MapMarkerComponent,
    InfoWindowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
