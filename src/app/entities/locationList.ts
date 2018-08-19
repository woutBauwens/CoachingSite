import {Location} from "./location";


export class LocationList {
    locations: Array<Location>;

    constructor(locationsArray: Array<any>) {

        this.locations = [];

        locationsArray.forEach(data => {
            this.locations.push(new Location(data));
        })

    }
}
