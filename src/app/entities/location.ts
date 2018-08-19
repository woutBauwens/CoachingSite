import {LonLat} from "./lonlat";

export class Location {

    public id: string;
    public name: string;
    public disipline: string;
    public location?: LonLat;
    public marker?: string;
    public site: string;

    constructor(locationListJson: any) {
        this.id = locationListJson.id ? locationListJson.id : 0;
        this.name = locationListJson.name ? locationListJson.name : "";
        this.disipline = locationListJson.disipline ? locationListJson.disipline : "";
        this.location = new LonLat(locationListJson.location);
        this.site = locationListJson.site ? locationListJson.site : "";
        this.marker = 'assets/marker.png';
    }

}
