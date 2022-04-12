import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiInterface } from '../app.model';
import { AppService } from '../app.service';
import { delay, Observable } from 'rxjs';
import { MovieHttpInterface } from './index.model';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private api: ApiInterface;

  constructor(private http: HttpClient, appService: AppService) {
    this.api = appService.Api;
  }

  getMovies(page: number = 1): Observable<MovieHttpInterface> {
    const params = new URLSearchParams();
    if (page > 0) {
      params.append('page', page.toString());
    }
    const paramsString = params.toString();

    const movies = this.http.get<MovieHttpInterface>
    (`${this.api.url}/3/movie/popular?api_key=${this.api.key}&${paramsString}`);

    return movies;
  }
}
