import { Component } from '@angular/core';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css'],
})
export class MapMarkerComponent {
  center: google.maps.LatLngLiteral = { lat: 25, lng: 85 };
  zoom = 8;
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
}
