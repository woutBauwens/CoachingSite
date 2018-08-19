import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StravaService } from '../../services/strava.service';
import { User } from '../../entities/user';

@Component({
  selector: 'app-root',
  templateUrl: './strava.component.html',
  styleUrls: ['./strava.component.css']
})

export class StravaComponent implements OnInit {
  errorMessage: string;
  athlete: any;
  stats: any;
  friends: any;
  routes: any;

  constructor(private http: Http, private stravaService: StravaService) {}

  ngOnInit() {
    this.getAthlete();
  }

  getAthlete() {
    this.stravaService.getAthlete()
                      .subscribe(
                        athlete =>  {
                          this.athlete = athlete;
                          this.getStats(athlete.id);
                          this.getFriends(athlete.id);
				                  this.getRoutes(athlete.id);
                        },
                        error => this.errorMessage = <any>error);
  }

  getStats(id) {
    return new Promise((resolve, reject) => {
      this.stravaService.getStats(id)
                      .subscribe(
                        stats => this.stats = stats,
                        error => this.errorMessage = <any>error);
    });
  }

  getFriends(id) {
    return new Promise((resolve, reject) => {
      this.stravaService.getFriends(id)
                      .subscribe(
                        friends => this.friends = friends,
                        error => this.errorMessage = <any>error);
    });
  }
  getRoutes(id) {
    return new Promise((resolve, reject) => {
      this.stravaService.getRoutes(id)
                      .subscribe(
                        routes => this.routes = routes,
                        error => this.errorMessage = <any>error);
    });
  }
}
