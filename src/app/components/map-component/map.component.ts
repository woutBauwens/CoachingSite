import {Component, OnInit} from '@angular/core';
import {LocationService} from "../../services/location.service";
import {LocationList} from "../../entities/locationList";
import {Location} from "../../entities/location";
import {LonLat} from "../../entities/lonlat";
import {Observable} from "rxjs";

@Component({
    selector: 'hom-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    public locationList: LocationList;
    public selectedLocation: Location;

    ngOnInit() {
    }

    constructor(public locationService: LocationService) {
      locationService.getLocations().subscribe(param => {
        this.locationList = param;
      });
    }

    public getLocation(): LonLat {
        this.locationService.getThisLocation();
        return this.locationService.geolocation;
    }

   public selectLocation(location) {
        this.selectedLocation = location;
        this.locationService.setSelectedLocation(location);

        this.setMarkers();

    }


   private setMarkers() {
        this.locationList.locations.map(location => {
            if ((this.selectedLocation) && (location.id === this.selectedLocation.id)) {
                location.marker = 'assets/selected-marker.png';
            } else {
                location.marker = 'assets/marker.png';
            }
            return location;
        });
    } 
}
