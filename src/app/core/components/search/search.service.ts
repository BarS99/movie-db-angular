import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Api } from 'src/environments/environment';
import { SearchHttpInterface, SearchInterface } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  getSearch(value: string): Observable<SearchInterface[]> {
    let params = new HttpParams().set("query", value); 

    return this.http.get<SearchHttpInterface>
    (`${Api.url}/3/search/movie?api_key=${Api.key}`, {params: params}).pipe(map(params => params.results.slice(0, 10)));
  }
}
