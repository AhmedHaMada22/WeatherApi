import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weatherservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

 
  
  constructor(private service: WeatherService) { }
  ngOnInit() {
  this.service.GetWeather();
  }

  
}



