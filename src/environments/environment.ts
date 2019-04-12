// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase : {
    apiKey: "AIzaSyAq1LFsUgy4D4VzzEHzOUMIQnd7DUZ3jhM",
    authDomain: "cursos2019.firebaseapp.com",
    databaseURL: "https://cursos2019.firebaseio.com",
    projectId: "cursos2019",
    storageBucket: "cursos2019.appspot.com",
    messagingSenderId: "209717829743"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
