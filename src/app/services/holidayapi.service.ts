import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { APP_CONFIG, HOLLIDAY_DI_CONFIG } from '../app.config';

@Injectable()
export class HolidayapiService {
  private url: string;

  constructor(private _http:Http, @Inject(APP_CONFIG) private config) { 
    this.url = this.config.apiEndpoint;
  }

  getTestFromService(): string {
    return "---> Test from api service: " + this.config.token;     
  }

  getHolidays(country:string, year: string, month: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.config.token);
    params.set('country', country);
    params.set('year', year);
    params.set('month', month);
		return this._http.get(this.url, {search: params})
		                 .map(res => res.json());
	}
}
