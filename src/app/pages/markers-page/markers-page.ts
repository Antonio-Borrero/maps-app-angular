import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl, { LngLatLike, MapMouseEvent } from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { v4 as UUIDv4 } from 'uuid';
import { JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

interface Marker {
    id: string;
    mapboxMarker: mapboxgl.Marker;
}

@Component({
    selector: 'app-markers-page',
    imports: [JsonPipe],
    templateUrl: './markers-page.html',
})
export class MarkersPage implements AfterViewInit {
    divElement = viewChild<ElementRef>('map');
    map = signal<mapboxgl.Map | null>(null);
    markers = signal<Marker[]>([]);

    async ngAfterViewInit() {
        if (!this.divElement()?.nativeElement) return;

        await new Promise((resolve) => setTimeout(resolve, 80));

        const element = this.divElement()!.nativeElement;

        const mapbox = new mapboxgl.Map({
            container: element,
            center: [-3.804147436303832, 43.46099559896331],
            zoom: 14,
        });

        this.mapListeners(mapbox);
    }

    mapListeners(map: mapboxgl.Map) {
        map.on('click', (event) => {
            this.mapClick(event);
        });

        this.map.set(map);
    }

    mapClick(event: mapboxgl.MapMouseEvent) {
        if (!this.map()) return;

        const map = this.map()!;
        const color = '#xxxxxx'.replace(/x/g, (y) => ((Math.random() * 16) | 0).toString(16));
        const coords = event.lngLat;

        const marker = new mapboxgl.Marker({
            color: color,
        })
            .setLngLat(coords)
            .addTo(map);

        const newMarker: Marker = {
            id: UUIDv4(),
            mapboxMarker: marker,
        };

        this.markers.update((prevMarkers) => [newMarker, ...prevMarkers]);
    }

    flyToMarker(lngLat: LngLatLike) {
        if (!this.map()) return;

        this.map()?.flyTo({
            center: lngLat,
        });
    }
}
