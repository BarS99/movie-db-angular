import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { MovieHttpInterface } from '../shared/components/card/card.model';
import { Api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  constructor(private http: HttpClient) {}

  getMovies(page: number = 1): Observable<MovieHttpInterface> {
    let params = new HttpParams;
    if (page > 0) {
      params = params.set('page', page.toString());
    }

    const movies = this.http.get<MovieHttpInterface>
    (`${Api.url}/3/movie/popular?api_key=${Api.key}`, {params: params}).pipe(delay(300));

    return movies;
  }
}
