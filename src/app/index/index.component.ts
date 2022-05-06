import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as IndexActions from './state/index.actions';
import * as IndexSelectors from './state/index.selectors';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger('opacityIn', [
      transition(':leave', []),
      transition('* <=> *', [
        query('.card__wrapper.card__wrapper--new', [
          style({ opacity: 0, transform: 'scale(0.9)' }),
          stagger('100ms', [
            animate('500ms', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ]),
    ]),
  ],
})
export class IndexComponent implements OnInit, OnDestroy {
  title: string = "Trending now";
  movies$ = this.store.select(IndexSelectors.selectMovies);
  loading$ = this.store.select(IndexSelectors.selectLoading);
  error$ = this.store.select(IndexSelectors.selectError);
  displayFetchButton$ = this.store.select(IndexSelectors.selectDisplayFetchButton);

  constructor(private store: Store, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.store.dispatch(IndexActions.initMovies());
  }

  ngOnDestroy(): void {
    this.store.dispatch(IndexActions.resetMovies());
  }

  fetchMovies(): void {
    this.store.dispatch(IndexActions.fetchMovies({}));
  }

  onAnimationDone(e: any): void {
    this.elementRef.nativeElement.querySelectorAll('.card__wrapper.card__wrapper--new').forEach((item: any) => {
      item.classList.remove('card__wrapper--new') ;
    })
  }
}
