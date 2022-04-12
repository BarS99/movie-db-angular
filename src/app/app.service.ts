import { Injectable } from '@angular/core';

import { ApiInterface } from "./app.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private api: ApiInterface = {
    key: "e003527dc120ac9c047140a2d1870a10",
    url: "https://api.themoviedb.org",
    poster: "https://image.tmdb.org/t/p/w500",
  };

  get Api() : ApiInterface {
    return this.api;
  }
}