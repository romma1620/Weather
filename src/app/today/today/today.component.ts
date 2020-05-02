import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../models/weather.model';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})


export class TodayComponent implements OnInit{
  lat;
  lon;
  weather;
  // weather: Weather;
  title = 'Weather';
  constructor(private weatherService: WeatherService) {

  }



  ngOnInit() {
    this.getLocation();
  }
  getLocation(){
    if ('geolocation' in navigator){
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherByCoords(this.lat, this.lon)
          .subscribe(data => this.weather = data);
        console.log(this.lat, this.lon);

      });
    }
  }

}


