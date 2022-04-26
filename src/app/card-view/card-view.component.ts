import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar, faBan } from '@fortawesome/free-solid-svg-icons';
import { dateToIso } from 'src/app/shared/utilities';
import { Api, assets } from 'src/environments/environment';
import { FavoriteService } from '../favorite/favorite.service';
import { MovieViewInterface } from '../shared/components/card/card.model';
import { DetailsInterface } from './card-view.model';
import { CardViewService } from './card-view.service';

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

  constructor(private route: ActivatedRoute, private cardViewService: CardViewService, private favoriteService: FavoriteService, private locationService: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });

    this.isFavorite = this.favoriteService.isFavorite(this.id);

    this.cardViewService.getMovie(this.id).subscribe({
      next: (response) => {
        this.movie = response;
      },
      error: () => {
        this.alertMessage = "Failed to fetch the movie!";
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    })
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
