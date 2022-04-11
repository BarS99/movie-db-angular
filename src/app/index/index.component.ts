import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';
import { MovieInterface } from './index.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  private title: string = "Trending now";
  private movies: MovieInterface[] = [];

  constructor(public indexService: IndexService) {
  }

  ngOnInit(): void {
    this.indexService.Movies.subscribe(response => {
      this.movies = <MovieInterface[]>response;
    })
  }

  get Title(): string {
    return this.title;
  }

  get Movies(): MovieInterface[] {
    return this.movies;
  }
}
