import {
    JsonpModule,
    Jsonp,
    BaseRequestOptions,
    Response,
    ResponseOptions,
    Http
} from "@angular/http";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';

import {MockBackend} from "@angular/http/testing";
import {StravaService} from '../../services/strava.service';
import { StravaComponent } from './strava.component';

describe('StravaComponent', () => {
  let component: StravaComponent;
  let service: StravaService;
  let backend: MockBackend;
  let athlete: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      declarations: [ StravaComponent ]
    })
    .compileComponents();

    // Get the MockBackend
    backend = TestBed.get(MockBackend);

    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(StravaService);
  });

it('search should return Athlete', fakeAsync(() => {
    let response = {
      "id":26748261,"username":"wout_bauwens","resource_state":3,"firstname":"Wout","lastname":"Bauwens","city":"","state":"","country":"","sex":"M","premium":false,"created_at":"2017-12-19T15:47:10Z","updated_at":"2018-08-15T16:05:50Z","badge_type_id":0,"profile_medium":"https://graph.facebook.com/779282968925836/picture?height=256\u0026width=256","profile":"https://graph.facebook.com/779282968925836/picture?height=256\u0026width=256","friend":null,"follower":null,"email":"woutje.beauwens@hotmail.com","follower_count":3,"friend_count":4,"mutual_friend_count":0,"athlete_type":0,"date_preference":"%m/%d/%Y","measurement_preference":"meters","clubs":[{"id":330033,"resource_state":2,"name":"OVERMOEDIG","profile_medium":"https://dgalywyr863hv.cloudfront.net/pictures/clubs/330033/7775245/3/medium.jpg","profile":"https://dgalywyr863hv.cloudfront.net/pictures/clubs/330033/7775245/3/large.jpg","cover_photo":"https://dgalywyr863hv.cloudfront.net/pictures/clubs/330033/7775216/6/large.jpg","cover_photo_small":"https://dgalywyr863hv.cloudfront.net/pictures/clubs/330033/7775216/6/small.jpg","sport_type":"cycling","city":"Aalst","state":"Vlaanderen","country":"België","private":true,"member_count":7,"featured":false,"verified":false,"url":"overmoedig","membership":"member","admin":false,"owner":false}],"ftp":null,"weight":62.0,"bikes":[],"shoes":[],"subscription_permissions":[]
    };


    backend.connections.subscribe(connection => { 
    connection.mockRespond(new Response(<ResponseOptions>{ 
      body: JSON.stringify(response)
    }));
  });

    service.getAthlete()
                      .subscribe(
                        athlete =>  {
                          this.athlete = athlete;
                        },
                        error => this.errorMessage = <any>error);
    tick();

    expect(athlete.length).toBe(1);
    expect(athlete.firstname).toBe("Wout");
    expect(athlete.lastname).toBe("Bauwens");
    expect(athlete.sex).toBe("M");
    expect(athlete.friend_count).toBe(4);
  }));
});
