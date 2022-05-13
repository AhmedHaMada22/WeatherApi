
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Weather } from './weather';


@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  url: string = 'https://api.open-meteo.com/v1/forecast?latitude=29.98&longitude=31.34&hourly=temperature_2m';
  list: Weather;
  constructor(private http: HttpClient) { }

  GetWeather() {
    this.http.get(this.url)
      .toPromise()
      .then(res => this.list = res as Weather);
  }

}
