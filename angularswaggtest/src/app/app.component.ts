import { Component, OnInit } from '@angular/core';
import { WeatherClient, WeatherForecast } from './data/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularswaggtest';

  constructor(private weatherClient: WeatherClient) {}

  ngOnInit(): void {
    this.weatherClient.getWeatherForecast().subscribe((data) => {
      console.log(data);
    });
  }
}
