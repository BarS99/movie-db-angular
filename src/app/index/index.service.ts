import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { GenreHttpInterface, GenreInterface, MovieHttpInterface } from '../shared/components/card/card.model';
import { Api } from 'src/environments/environment';

interface getMoviesInterface {
  page?: number,
  year?: number,
  genre?: string,
}

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  constructor(private http: HttpClient) {}

  getMovies(_params?: getMoviesInterface): Observable<MovieHttpInterface> {
    let params = new HttpParams;
    if (_params?.page) {
      params = params.set('page', _params.page?.toString());
    }
    if (_params?.year) {
      params = params.set('year', _params.year);
    }
    if (_params?.genre) {  
      params = params.set('with_genres', _params.genre);
    }

    const movies = this.http.get<MovieHttpInterface>
    (`${Api.url}/3/discover/movie?api_key=${Api.key}`, {params: params}).pipe(delay(300));

    return movies;
  }
}
