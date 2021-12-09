import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { API_BASE_URL, WeatherClient } from './data/api.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

const services = [
  {
    provide: API_BASE_URL,
    useFactory: () => 'https://localhost:7232',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [...services, WeatherClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
