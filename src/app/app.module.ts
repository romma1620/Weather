import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from './services/weather.service';
import {FormsModule} from '@angular/forms';
import { TodayComponent } from './today/today/today.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
