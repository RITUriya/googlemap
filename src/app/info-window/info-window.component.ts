import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css'],
})
export class InfoWindowComponent {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = { lat: 25, lng: 85 };
  zoom = 8;
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
  mapInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }
}
