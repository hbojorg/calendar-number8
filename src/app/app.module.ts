import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { APP_CONFIG, HOLLIDAY_DI_CONFIG } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: HOLLIDAY_DI_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
