import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  city = 'Kalush';
  APIKey = '35e6b70f1bac68f858a0761ec80c4ff0';
  // API = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=' + this.APIKey;
  API = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) {
  }

  getWeatherByCoords(lat, lon){
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.APIKey);

    return this.http.get(this.API, {params});
  }
  // getWeatherByCoords(lat, lon): Observable<Weather>{
  //   const params = new HttpParams()
  //     .set('lat', lat)
  //     .set('lon', lon)
  //     .set('units', 'imperial')
  //     .set('appid', this.APIKey)
  //
  //   return this.http.get<Weather>(this.API, {params});
  // }

  // getWeather(): Observable<Weather>{
  //   return this.http.get<Weather>(this.API);
  // }
}
