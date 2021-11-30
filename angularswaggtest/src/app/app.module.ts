import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { API_BASE_URL } from './data/api.service';
import { AppComponent } from './app.component';

const services = [
  {
    provide: API_BASE_URL,
    useFactory: () => 'https://localhost:7232',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [...services],
  bootstrap: [AppComponent],
})
export class AppModule {}
