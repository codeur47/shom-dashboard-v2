import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiUtilsService {

    constructor() {}

    /**
     *
     * @description difference in time from two date
     * @param dateLasteBuild any - the date in parameter
     * @returns the difference in hours between the date in parameter and the current date
     */
    getDifference(dateLasteBuild: any): number {
        return (new Date().getTime() - (new Date(dateLasteBuild)).getTime()) / (3600 * 1000);
    }
}
