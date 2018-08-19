export class LonLat {
    public lon: number;
    public lat: number;

    constructor(json: any) {
        this.lon = Number(json.longitude);
        this.lat = Number(json.latitude);
    }


}
