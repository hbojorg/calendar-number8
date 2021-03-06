import { Component, OnInit, Input } from '@angular/core';
import { HolidayapiService } from '../services/holidayapi.service'
import { DayModel } from '../calendar/day.model';

@Component({
  selector: 'calendar-number8',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [HolidayapiService]
})
export class CalendarComponent implements OnInit {
  public title: string;
  public testService: string;
  public holidays: any;

  @Input('input1') days:Array<DayModel>;
  @Input('input2') countryCode:string;

  constructor(private _apiService: HolidayapiService) { 
    this.title = "";
    this.testService = _apiService.getTestFromService();
    this.setHolidays();
  }

  ngOnInit() {
  }

  setHolidays() {
		this._apiService.getHolidays('US', '2016', '09').subscribe(
			result => {
        this.holidays = result;
        console.log(this.holidays);	
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);
			}
		);
	}
}
