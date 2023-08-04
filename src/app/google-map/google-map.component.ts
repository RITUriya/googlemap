import { Component } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent {
  display: any;
  center: google.maps.LatLngLiteral = { lat: 25, lng: 85 };
  zoom = 4;
  mapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  mapMouseOver(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
