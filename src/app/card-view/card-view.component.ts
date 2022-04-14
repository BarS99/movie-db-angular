import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faDollar, faLink, faQuestion, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { dateToIso } from 'src/app/shared/utilities';
import { Api } from 'src/environments/environment';
import { MovieViewInterface } from '../shared/components/card/card.model';
import { CardViewService } from './card-view.service';

interface DetailsInterface {
  icon: IconDefinition,
  field: string,
  value: any
}

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  private id: number = -1;
  movie: MovieViewInterface | null = null;
  alertMessage: string | boolean = "";
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private cardViewService: CardViewService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

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
    return `${Api.posterLg}${this.movie?.poster_path}`;
  }

  get DetailsList(): DetailsInterface[] {
    const result: DetailsInterface[] = [];

    if (this.movie?.genres !== null && this.movie?.genres !== undefined) {
      result.push({ icon: faQuestion, field: "Genres", value: this.movie?.genres.map(item => item.name).join(", ") });
    }
    if (this.movie?.revenue !== null && this.movie?.revenue !== undefined) {
      result.push({ icon: faDollar, field: "Box office", value: `${this.movie?.revenue.toLocaleString()}$` });
    }
    if (this.movie?.adult !== null && this.movie?.adult !== undefined) {
      result.push({ icon: faUserShield, field: "For adults", value: this.movie?.adult ? "Yes" : "No" });
    }
    if (this.movie?.homepage !== null && this.movie?.homepage !== undefined) {
      result.push({ icon: faLink, field: "Website", value: this.movie?.homepage });
    }

    return result;
  }

  getDateToIso(date: string): string {
    return dateToIso(date);
  }
}