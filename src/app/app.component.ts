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
  private numberOfMonths: number;

  public days:Array<Array<DayModel>>;

  constructor() {
    this.patternDate = /(\d{2})[- /.](\d{2})[- /.](\d{4})/;      
  }

  onSubmit() {
    let startDateArray = this.patternDate.exec(this.startDate);
    this._startDate = new Date(+startDateArray[3], (+startDateArray[2]-1), +startDateArray[1]);
    this._endDate = new Date(this._startDate.getFullYear(), this._startDate.getMonth(), this._startDate.getDate());
    this._endDate.setDate(this._endDate.getDate() + Number(this.numberOfDays)); 
    
    this.numberOfMonths = this.calculateNumberOfMonths();
    this.days = new Array(this.numberOfMonths);
  }  

  calculateNumberOfMonths():number {
    let numberMonths = (this._endDate.getFullYear() - this._startDate.getFullYear())*12 + (this._endDate.getMonth() - this._startDate.getMonth());
    return numberMonths;
  }

  buildDays() {    
    let totalDays = Number(this.numberOfDays);
    let monthTemp:DayModel[]  = [];
    let day:DayModel = this.getDay(this._startDate, 0);
    monthTemp.push(day);
    let previousDay:DayModel = day; 
    
    while (totalDays>0) {
      day = this.getDay(day.day, 1);
      if (day.day.getMonth() != previousDay.day.getMonth()) {
        this.days.push(monthTemp);
        monthTemp = [];      
      }
      previousDay = day;
      monthTemp.push(day);
      totalDays--;                   
    }
    this.days.push(monthTemp);
  }

  getDay(refDate:Date, inc:number) {
    let day:Date = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate());
    day.setDate(this.endDate.getDate() + inc);
    day = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate());
    let dayModel: DayModel = new DayModel(day, false);
    return dayModel;
  }
}
