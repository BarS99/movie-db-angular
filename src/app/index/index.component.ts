import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as IndexActions from './state/index.actions';
import * as IndexSelectors from './state/index.selectors';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  title: string = "Trending now";
  movies$ = this.store.select(IndexSelectors.selectMovies);
  loading$ = this.store.select(IndexSelectors.selectLoading);
  error$ = this.store.select(IndexSelectors.selectError);
  displayFetchButton$ = this.store.select(IndexSelectors.selectDisplayFetchButton);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(IndexActions.loadMovies({}));
  }

  ngOnDestroy(): void {
    this.store.dispatch(IndexActions.resetMovies());
  }

  fetchMovies(): void {
    this.store.dispatch(IndexActions.loadMovies({}));
  }
}
