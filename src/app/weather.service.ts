import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API = 'https://api.openweathermap.org/data/2.5/weather?q=Lviv&APPID=35e6b70f1bac68f858a0761ec80c4ff0';

  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<Weather>{
    return this.http.get<Weather>(this.API);
  }
}
