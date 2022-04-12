import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';
import { MovieInterface, MovieHttpInterface } from '../card/card.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title: string = "Trending now";
  movies: MovieInterface[] = [];
  page: number = 1;
  private maxPage: number = -1;
  alertMessage: string|boolean = "";
  loading: boolean = true;

  constructor(private indexService: IndexService) {}

  private moviesObserverActions = {
    next: (response: MovieHttpInterface) => {
      this.movies = [...this.movies, ...response.results];
      if (this.maxPage < 1) {
        this.maxPage = response.total_pages;
      }
    },
    error: () => {
      this.movies = []
      this.loading = false;
      this.alertMessage = "Failed to fetch the movies!";
    },
    complete: () => {
      this.loading = false;
      this.page = this.page + 1;
    }
  }

  ngOnInit(): void {
    this.indexService.getMovies().subscribe(this.moviesObserverActions);
  }

  fetchMovies(page: number): void {
    this.loading = true;
    if (this.page > this.maxPage) return;

    this.indexService.getMovies(page).subscribe(this.moviesObserverActions)
  }
}
