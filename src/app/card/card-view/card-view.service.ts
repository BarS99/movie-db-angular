import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, tap } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { MovieViewInterface } from '../card.model';

@Injectable({
  providedIn: 'root'
})
export class CardViewService {
  constructor(private http: HttpClient, private appService: AppService) {}

  getMovie(id: number): Observable<MovieViewInterface> {
    return this.http.get<MovieViewInterface>
    (`${this.appService.api.url}/3/movie/${id}?api_key=${this.appService.api.key}`).pipe(delay(300), tap((result) => {
      console.log(result);
    }));
  }
}
