import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';
import { MovieInterface, MovieHttpInterface, GenreInterface } from '../shared/components/card/card.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title: string = "Trending now";
  filtersForm!: FormGroup;
  genres$!: Observable<GenreInterface[]>;
  movies: MovieInterface[] = [];
  page: number = 1;
  maxPage: number = -1;
  alertMessage: string | boolean = "";
  loading: boolean = true;

  constructor(private indexService: IndexService, private formBuilder: FormBuilder) { }

  private moviesObserverNext = (response: MovieHttpInterface) => {
    this.movies = [...this.movies, ...response.results];
    if (this.maxPage < 1) {
      if (response.total_pages > 500) {
        this.maxPage = 500;
      } else {
        this.maxPage = response.total_pages;
      }
    }
  };

  private moviesObserverError = () => {
    this.movies = []
    this.loading = false;
    this.alertMessage = "Failed to fetch the movies!";
  }

  private moviesObserverComplete = () => {
    this.loading = false;
    this.page = this.page + 1;
  }

  private moviesObserverDefault = {
    next: this.moviesObserverNext,
    error: this.moviesObserverError,
    complete: this.moviesObserverComplete,
  }

  ngOnInit(): void {
    this.filtersForm = this.formBuilder.group({
      genre: new FormControl(""),
      year: new FormControl(""),
    });

    this.filtersForm.valueChanges.subscribe({
      next: (params) => {
        this.page = 1;
        this.movies = [];
        this.loading = true;
        this.indexService.getMovies({ ...params, page: this.page }).subscribe(this.moviesObserverDefault);
      },
      error: this.moviesObserverError,
      complete: this.moviesObserverComplete,
    })

    this.genres$ = this.indexService.getGenres();
    this.indexService.getMovies({ ...this.filtersForm.value, page: this.page }).subscribe(this.moviesObserverDefault);
  }

  fetchMovies(page: number): void {
    this.loading = true;
    if (this.page > this.maxPage) return;

    this.indexService.getMovies({ ...this.filtersForm.value, page: page }).subscribe(this.moviesObserverDefault)
  }

  generateYears(): number[] {
    return this.indexService.generateYears(1900, new Date().getFullYear());
  }
}
