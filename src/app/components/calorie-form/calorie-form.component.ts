import { Component, OnInit } from '@angular/core';
import {User} from "../../entities/user";
import { Http } from '@angular/http';
import {StravaService} from "../../services/strava.service";


@Component({
  selector: 'app-calorie-form',
  templateUrl: './calorie-form.component.html',
  styleUrls: ['./calorie-form.component.css']
})
export class CalorieFormComponent implements OnInit {

  public user: User;
  public athlete: any;
  public result: number;
  submitted = false;
  public days: number;
  public kayak: number;
  public climbing: number;
  public fitness: number;
  public walk: number;
  constructor(private http: Http, private stravaService: StravaService) {this.kayak = 0; this.climbing = 0; this.fitness = 0; this.walk = 0;}

  getUser(){
-    this.stravaService.getAthlete()
                      .subscribe(
                        athlete =>  {
                          this.athlete = athlete;
                        },
                        error => <any>error);
  }

  calculate(){
   // this.calculator.days = this.day;
      this.result = 10 * this.athlete.weight + 1500;
      this.result = this.result*this.days;
      this.result = this.result + this.kayak*100 + this.climbing*500 + this.fitness*500 + this.walk*100;
      this.result = this.result * this.athlete.weight/60;
    if(this.athlete.gender=="F"){
      this.result = this.result*0.75;
    }
  //  this.calculator.kayak = this.kayakVal;
  //  this.calculator.climbing = this.climbingVal;
  //  this.calculator.fitness = this.fitnessVal;
  //  this.calculator.walking = this.walkingVal;
   // this.result = this.calculator.Calculate(); 
  }

  onSubmit() { this.submitted = true; }


  ngOnInit() {
    this.getUser();
  }
}
