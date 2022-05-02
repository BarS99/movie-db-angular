import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar, faBan } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { dateToIso } from 'src/app/shared/utilities';
import { Api, assets } from 'src/environments/environment';
import { FavoriteService } from '../favorite/favorite.service';
import { MovieViewInterface } from '../shared/components/card/card.model';
import { DetailsInterface } from './card-view.model';
import { CardViewService } from './card-view.service';
import { reloadComments } from './components/comment-section/state/comment.actions';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  private id: number = -1;
  movie: MovieViewInterface | null = null;
  isFavorite: boolean = false;
  alertMessage: string | boolean = "";
  loading: boolean = true;
  starIcon: IconDefinition = faStar;
  banIcon: IconDefinition = faBan;
  navigationStart$: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cardViewService: CardViewService,
    private favoriteService: FavoriteService,
    private locationService: Location,
    private store: Store,
  ) {
    this.navigationStart$ = this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.fetchMovie();
    })
  }

  ngOnInit(): void {
    this.fetchMovie();
  }

  fetchMovie(): void {
    this.loading = true;

    this.activatedRoute.params.subscribe(params => {
      this.id = parseInt(params['id']);

      this.isFavorite = this.favoriteService.isFavorite(this.id);

      const movieObservable$: Subscription = this.cardViewService.getMovie(this.id).subscribe({
        next: (response) => {
          this.movie = response;
          this.store.dispatch(reloadComments({movieId: this.movie.id}))
        },
        error: () => {
          this.alertMessage = "Failed to fetch the movie!";
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
          movieObservable$.unsubscribe();
          this.navigationStart$.unsubscribe();
        }
      });
    });
  }

  get PosterPath(): string | null {
    if (this.movie?.poster_path === null || this.movie?.adult === true) {
      return `${assets}/images/thumbnail.jpg`;
    }

    return `${Api.posterLg}${this.movie?.poster_path}`;
  }

  get DetailsList(): DetailsInterface[] {
    return this.cardViewService.getDetailsList(this.movie);
  }

  getDateToIso(date: string): string {
    return dateToIso(date);
  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.favoriteService.removeFromFavorite(this.id);

      this.isFavorite = false;
    } else {
      this.favoriteService.addToFavorite(this.id);

      this.isFavorite = true;
    }
  }

  goBack(): void {
    this.locationService.back();
  }
}
