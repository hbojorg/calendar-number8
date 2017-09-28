import { Component } from '@angular/core';
import { DayModel } from './calendar/day.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my exercise UI DEV';
  
  public startDate: string;
  public numberOfDays: string;
  public countryCode: string;
  public endDate: Date;

  private patternDate: RegExp;
  public _endDate: Date;
  private _startDate: Date;

  constructor() {
    this.patternDate = /(\d{2})[- /.](\d{2})[- /.](\d{4})/;  
    //this.onSubmit();
  }

  onSubmit() {
    let startDateArray = this.patternDate.exec(this.startDate);
    this._startDate = new Date(+startDateArray[3], (+startDateArray[2]-1), +startDateArray[1]);
    this._endDate = new Date(this._startDate.getFullYear(), this._startDate.getMonth(), this._startDate.getDate());
    this._endDate.setDate(this._endDate.getDate() + Number(this.numberOfDays));    
  }


}
