import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MovieViewInterface } from '../card.model';
import { CardViewService } from './card-view.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  private id: number = -1;
  private movie: MovieViewInterface|null = null;
  private alertMessage: string|boolean = "";
  private loading: boolean = true;

  constructor(private route: ActivatedRoute, private cardViewService: CardViewService, private appService: AppService) {}

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

  get Movie(): MovieViewInterface|null {
    return this.movie as MovieViewInterface;
  }

  get AlertMessage(): string|boolean {
    return this.alertMessage;
  }

  get Loading(): boolean {
    return this.loading;
  }

  get PosterPath(): string|null {
    return `${this.appService.Api.posterLg}${this.movie?.poster_path}`;
  }

  getDateToIso(date: string): string {
    return this.appService.dateToIso(date);
  }
}
