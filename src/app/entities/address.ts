import {LonLat} from "./lonlat";
export class Address {
    public street: string;
    public number: string;
    public zip: string;
    public city: string;
    public country: string;
    public lonlat?: LonLat;

    constructor(result: Array<any>) {

        result.forEach((value) => {
            if(value.types.indexOf('street_number') != -1) {
                this.number = value.long_name;
            }
            if(value.types.indexOf('route') != -1) {
                this.street = value.long_name;
            }
            if(value.types.indexOf('postal_code') != -1) {
                this.zip = value.long_name;
            }
            if(value.types.indexOf('locality') != -1) {
                this.city = value.long_name;
            }
            if(value.types.indexOf('country') != -1) {
                this.country = value.long_name;
            }
        });
    }

    setLonlat(lonlat: LonLat) {
        this.lonlat = lonlat;
    }
}