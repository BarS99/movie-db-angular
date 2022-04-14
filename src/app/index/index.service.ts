import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { delay, Observable } from 'rxjs';
import { MovieHttpInterface } from '../shared/components/card/card.model';
import { Api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  constructor(private http: HttpClient) {}

  getMovies(page: number = 1): Observable<MovieHttpInterface> {
    const params = new URLSearchParams();
    if (page > 0) {
      params.append('page', page.toString());
    }
    const paramsString = params.toString();

    const movies = this.http.get<MovieHttpInterface>
    (`${Api.url}/3/movie/popular?api_key=${Api.key}&${paramsString}`).pipe(delay(300));

    return movies;
  }
}
