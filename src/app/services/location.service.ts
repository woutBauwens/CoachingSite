import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LonLat} from "../entities/lonlat";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Address} from "../entities/address";
import {LocationList} from "../entities/locationList";

import {AngularFirestore} from 'angularfire2/firestore';
import {OperatorFunction} from "rxjs/interfaces";


@Injectable()
export class LocationService {

    public geolocation = new LonLat({lon: 4, lat: 51});
    public address: Address;
    public location = "";
    public selectedLocation: Location;


    constructor(public httpClient: HttpClient, private db: AngularFirestore) {
        this.getThisLocation();
    }

    public setSelectedLocation(location): Location {
        this.selectedLocation = location;
        return this.selectedLocation;
    }

    public getThisLocation() {

        const self = this;

        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.geolocation = new LonLat({lon: position.coords.longitude, lat: position.coords.latitude});
                    self.setAddressFromLonlat(this.geolocation);
                },
                (error) => {
                    console.log(error)
                })
        }
    }

    public getLocations() {
        return this.db.collection('Locations').valueChanges().map(data => {
            return new LocationList(data);
        });
    }

    public setAddressFromLonlat(lonlat: LonLat) {

        this.Lonlat2Address(lonlat).subscribe(address => {
            this.address = address;
            this.location = address.zip + " " + address.city;
            console.log(this.address);
            return address
        });

    }

    public setLonLatFromLocation(location: string) {

        this.location = location;
        this.Address2Lonlat(location).subscribe(lonlat => {
            this.geolocation = lonlat;
            this.setAddressFromLonlat(this.geolocation);
        });

    }

    public Lonlat2Address(location: LonLat) {

        return this.httpClient
            .get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.lat + ',' + location.lon + '&sensor=true&key=AIzaSyAxIOJ1QGoYBtA0HEtOjnctUkrHLu8gd-8')
            .map(data => {
                if (data.hasOwnProperty('results')) {
                    console.log(data['results'][0]);
                    let address = new Address(data['results'][0].address_components);
                    address.setLonlat(location);
                    return address;
                }
            });
    }

    private Address2Lonlat(location: string) {

        return this.httpClient
            .get('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&sensor=true&key=AIzaSyAxIOJ1QGoYBtA0HEtOjnctUkrHLu8gd-8')
            .map(data => {
                if (data.hasOwnProperty('results')) {
                    return new LonLat({
                        lon: data['results'][0].geometry.location.lng,
                        lat: data['results'][0].geometry.location.lat
                    });
                }
            });
    }
}

