// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const baseUrl = 'http://qlf-entrepot-shom-fr.shom2.as8677.net/orchestrateur/job/';
export const sourceSufix = "_INTEGRATION/api/json?tree=builds[id,status,timestamp,result,url]";
export const hoursMonitoringNavarea = 25;
export const hoursMonitoringGan = 192;
export const hoursMonitoringOceano = 24;
export const secondsCheck = 20000;
export const oceanoApiBuild = "../assets/data/oceano.json";
export const oceanoApiLastId = "../assets/data/oceanolastbuild.json";

export const THEMATIQUE = {
  VAGUES : 'VAGUES',
  METEO : 'METEO',
  HYDRODYN : 'HYDRODYN',
  RADARHF : 'RADARHF',
  NIVEAUX : 'NIVEAUX'
};

export const numberIntegration = 3;

export const environment = {
  production: false,
  
  // tslint:disable-next-line: max-line-length
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
