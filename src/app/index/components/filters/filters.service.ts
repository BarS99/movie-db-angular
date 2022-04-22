import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GenreHttpInterface, GenreInterface } from 'src/app/shared/components/card/card.model';
import { Api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private http: HttpClient) {}

  getGenres(): Observable<GenreInterface[]> {
    const genres = this.http.get<GenreHttpInterface>(`${Api.url}/3/genre/movie/list?api_key=${Api.key}`).pipe(map((result) => {
      return result.genres;
    }));

    return genres;
  }
  
  generateYears(start: number, end: number): number[]  {
    const years: number[] = [];
  
    for (let i = end; i >= start; i--) {
      years.push(i);
    }
  
    return years;
  };
}
