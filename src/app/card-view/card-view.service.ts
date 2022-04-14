import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Api } from 'src/environments/environment';
import { MovieViewInterface } from '../shared/components/card/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardViewService {
  constructor(private http: HttpClient) {}

  getMovie(id: number): Observable<MovieViewInterface> {
    return this.http.get<MovieViewInterface>
    (`${Api.url}/3/movie/${id}?api_key=${Api.key}`).pipe(delay(300));
  }
}
