// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const domain: string = '';

export const environment = {
  production: false
};

interface ApiInterface {
  key: string,
  url: string,
  poster: string,
  posterLg: string,
}

export const Api: ApiInterface = {
  key: "e003527dc120ac9c047140a2d1870a10",
  url: "https://api.themoviedb.org",
  poster: "https://image.tmdb.org/t/p/w500",
  posterLg: "https://image.tmdb.org/t/p/w780",
};

export const assets: string = "/assets";

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
