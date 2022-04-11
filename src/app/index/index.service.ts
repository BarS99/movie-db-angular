import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiInterface } from '../app.model';
import { AppService } from '../app.service';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private api: ApiInterface;

  constructor(private http: HttpClient, appService: AppService) {
    this.api = appService.Api;
  }

  get Movies() {
    return this.http.get(`${this.api.url}/3/movie/popular?api_key=${this.api.key}`).pipe(pluck('results'));
  }
}
