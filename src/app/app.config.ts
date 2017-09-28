import { InjectionToken } from '@angular/core';

export interface IAppConfig {
    apiEndpoint: string;
    token: string;
}

export const HOLLIDAY_DI_CONFIG: IAppConfig = {
    apiEndpoint: 'https://holidayapi.com/v1/holidays',
    token: '1d969833-a7dc-4745-a0a9-b9b2ea0b6e88'
}

export let APP_CONFIG = new InjectionToken< IAppConfig >('app.config');