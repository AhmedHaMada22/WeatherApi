import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weatherservice';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {



  constructor(private service: WeatherService) { }
  ngOnInit() {
    this.service.GetWeather();
  }

}
