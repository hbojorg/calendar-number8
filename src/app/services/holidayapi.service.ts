import { Injectable } from '@angular/core';

@Injectable()
export class HolidayapiService {

  constructor() { }

  getTestFromService(): string {
    return "---> Test from api service"; 
  }

}
