import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { delay, finalize, forkJoin, from, Observable, tap } from 'rxjs';
import { Api, domain } from 'src/environments/environment';
import { MovieViewInterface } from '../shared/components/card/card.model';
import { getLocalStorage } from '../shared/utilities';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  title: string = "Favorite movies";
  private favoriteList: number[] = getLocalStorage('favorite');
  private favoriteHttp$!: Observable<MovieViewInterface>[];
  favorite$!: Observable<MovieViewInterface[]>;
  iconLoupe: IconDefinition = faMagnifyingGlass;
  iconBan: IconDefinition = faBan;
  alert: boolean = this.favoriteList.length ? false : true;

  constructor(private http: HttpClient, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteHttp$ = this.favoriteList.map(id => {
      return this.http.get<MovieViewInterface>(`${Api.url}/3/movie/${id}?api_key=${Api.key}`);
    })

    this.favorite$ = forkJoin(this.favoriteHttp$).pipe(delay(500));
  }

  getHref(id: number): string {
    return `${domain}/movie/${id}`;
  }

  removeFromFavorite(id: number): void {
    this.favoriteList = this.favoriteService.removeFromFavorite(id);

    if (!this.favoriteList.length) {
      this.alert = true;
    }

    this.favoriteHttp$ = this.favoriteList.map(id => {
      return this.http.get<MovieViewInterface>(`${Api.url}/3/movie/${id}?api_key=${Api.key}`);
    })

    this.favorite$ = forkJoin(this.favoriteHttp$).pipe(delay(200));
  }
}
