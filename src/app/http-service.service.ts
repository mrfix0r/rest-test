import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Dummy} from './dummy';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class HttpServiceService {

  private heroesUrl = 'http://localhost:8080/RESTfulWS-1/uni/12/getDummy';

  constructor(private http: HttpClient) { }

  getDummy (): Observable<Dummy> {

    // const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    // return this.http.get<Dummy>(this.heroesUrl, { headers: headers});
    return this.http.get<Dummy>(this.heroesUrl);
}

  private log(message: string) {
    console.log(message);
  }

}
