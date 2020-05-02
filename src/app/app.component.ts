import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Weather} from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weather: Weather;
  title = 'Weather';
  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(){
    return this.weatherService.getWeather()
      .subscribe(data => this.weather = data);
  }

}
