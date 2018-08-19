import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StravaService {

  private apiURL = 'https://www.strava.com/api/v3/';
  private TOKEN = '1b9acbaf11452a685b14a96a92c641ee36c0555a'

  constructor (private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this.TOKEN);
  }

  getAthlete() : Observable<any> {
    let url = `${this.apiURL}/athlete`;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, { headers: headers })
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getStats(id: number) : Observable<any> {
    let url = `${this.apiURL}/athletes/${id}/stats`;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, { headers: headers })
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getFriends(id: number) : Observable<any> {
    let url = `${this.apiURL}/athletes/${id}/friends?access_token=` + this.TOKEN;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, { headers: headers })
                    .map(this.extractData)
                    .catch(this.handleError);
  }

getRoutes(id: number) : Observable<any> {
    let url = `${this.apiURL}/athletes/${id}/routes?access_token=` + this.TOKEN;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, { headers: headers })
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}