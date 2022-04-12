import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';
import { MovieInterface, MovieHttpInterface } from './index.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  private title: string = "Trending now";
  private movies: MovieInterface[] = [];
  private page: number = 1;
  private maxPage: number = -1;
  private loading: boolean = true;

  constructor(public indexService: IndexService) {}

  private moviesObserverActions = {
    next: (response: MovieHttpInterface) => {
      this.movies = [...this.movies, ...response.results];
      if (this.maxPage < 1) {
        this.maxPage = response.total_pages;
      }
      this.loading = false;
    },
    error: () => this.movies = []
  }

  ngOnInit(): void {
    this.indexService.getMovies().subscribe(this.moviesObserverActions)
  }

  get Title(): string {
    return this.title;
  }

  get Movies(): MovieInterface[] {
    return this.movies;
  }

  get Page(): number {
    return this.page;
  }
  
  get Loading(): boolean {
    return this.loading;
  }

  fetchMovies(page: number): void {
    this.loading = true;
    this.page = this.page + 1;
    if (this.page > this.maxPage) return;

    this.indexService.getMovies(page).subscribe(this.moviesObserverActions)
  }
}
