import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;


@Component({
  selector: 'app-markers-page',
  imports: [],
  templateUrl: './markers-page.html',
})
export class MarkersPage implements AfterViewInit{
  divElement = viewChild<ElementRef>('map');
  
  map = signal<mapboxgl.Map | null>(null);
  
  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    const mapbox = new mapboxgl.Map({
      container: element, 
      center: [-3.804147436303832, 43.46099559896331],
      zoom: 14,
    });

    const marker = new mapboxgl.Marker({
      draggable: false,
      color: '#000',
    })
      .setLngLat([-3.804147436303832, 43.46099559896331])
      .addTo(mapbox)

    marker.on('dragend', (event) => {
      console.log(event)
    })

    this.mapListeners(mapbox);
  };

  mapListeners(map: mapboxgl.Map) {

  }
}
