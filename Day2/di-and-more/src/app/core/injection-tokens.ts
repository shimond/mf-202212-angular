import { InjectionToken } from "@angular/core";

export const MICROPROJECT_LANGUAGE = new InjectionToken<string>('MICROPROJECT_LANGUAGE', {
    providedIn: 'root',
    factory:()=> 'he-IL'
});
