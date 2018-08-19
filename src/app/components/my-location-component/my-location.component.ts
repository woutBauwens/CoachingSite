import {Component} from "@angular/core";
import {LocationService} from "../../services/location.service";


@Component({
    selector: 'hom-my-location',
    templateUrl: './my-location.component.html',
    styleUrls: ['./my-location.component.scss']
})
export class MyLocationComponent {

    public location = this.locationService.location;


    constructor(public locationService: LocationService) {
    }

    public getLocation() {
        return this.locationService.location;
    }

    public updateLocation() {
        this.locationService.setLonLatFromLocation(this.location);
    }
}


