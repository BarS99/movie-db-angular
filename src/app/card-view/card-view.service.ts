import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faQuestion, faDollar, faLink, faUserShield, } from '@fortawesome/free-solid-svg-icons';
import { Observable, delay } from 'rxjs';
import { Api } from 'src/environments/environment';
import { FavoriteService } from '../favorite/favorite.service';
import { MovieViewInterface } from '../shared/components/card/card.model';
import { DetailsInterface } from './card-view.model';

@Injectable({
  providedIn: 'root'
})
export class CardViewService {
  constructor(private http: HttpClient, private favoriteService: FavoriteService) {}

  getMovie(id: number): Observable<MovieViewInterface> {
    return this.http.get<MovieViewInterface>
    (`${Api.url}/3/movie/${id}?api_key=${Api.key}`).pipe(delay(300));
  }

  getDetailsList(data: MovieViewInterface|null): DetailsInterface[] {
    const result: DetailsInterface[] = [];

    if (data === null) return result;

    if (data?.genres !== null && data?.genres !== undefined && data?.genres.length) {
      result.push({ icon: faQuestion, field: "Genres", value: data?.genres.map(item => item.name).join(", ") });
    }
    if (data?.revenue !== null && data?.revenue !== undefined) {
      result.push({ icon: faDollar, field: "Box office", value: `${data?.revenue.toLocaleString()}$` });
    }
    if (data?.adult !== null && data?.adult !== undefined) {
      result.push({ icon: faUserShield, field: "For adults", value: data?.adult ? "Yes" : "No" });
    }
    if (data?.homepage !== null && data?.homepage !== undefined && data?.homepage.length) {
      result.push({ icon: faLink, field: "Website", value: data?.homepage });
    } 

    return result;
  }
}
