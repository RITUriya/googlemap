import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { InfoWindowComponent } from './info-window/info-window.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapComponent,
  },
  {
    path: 'map-marker',
    component: MapMarkerComponent,
  },
  { path: 'info-window', component: InfoWindowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
