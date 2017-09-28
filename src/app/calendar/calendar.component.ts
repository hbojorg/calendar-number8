import { Component, OnInit } from '@angular/core';
import { HolidayapiService } from '../services/holidayapi.service'

@Component({
  selector: 'calendar-number8',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [HolidayapiService]
})
export class CalendarComponent implements OnInit {
  public title: string;
  public testService: string;

  constructor(private _apiService: HolidayapiService) { 
    this.title = "";
    this.testService = _apiService.getTestFromService();
  }

  ngOnInit() {
  }

}
